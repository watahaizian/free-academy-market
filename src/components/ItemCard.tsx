import { useState } from 'react';
import { Heart } from 'lucide-react';
import type { CategoryItem } from '../types/item';

interface ItemCardProps {
  item: CategoryItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const [isFavorite, setIsFavorite] = useState<number[]>([]);

  const handleHeartClick = (itemId: number) => {
    setIsFavorite(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };
  return (
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-30 object-cover shadow-md"
      />
      <button
        onClick={() => handleHeartClick(item.id)}
        className="absolute bottom-2 left-17 z-10 p-1 rounded-full hover:bg-black/20 transition-colors"
        aria-label={isFavorite.includes(item.id) ? "お気に入りから削除" : "お気に入りに追加"}
      >
        <Heart
          className={`${isFavorite.includes(item.id) ? 'text-red-500 fill-red-500' : 'text-white'} transition-colors`}
        />
      </button>
    </div>
  )
}
