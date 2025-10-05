import { useState } from "react";
import { Heart } from "lucide-react";
import type { Item } from "../types/item";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
export default function ItemCard({ item }: { item: Item }) {
  const [isFavorite, setIsFavorite] = useState<number[]>([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  const isMyItem = user?.id === item.user_id;

  const handleHeartClick = (e: React.MouseEvent, itemId: number) => {
    e.stopPropagation(); // お気に入り追加と画像クリックイベントの両方が発火しないようにする
    setIsFavorite((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div
      className="relative h-54 w-32 py-3 px-3 border border-gray-200 rounded-md flex flex-col cursor-pointer"
      onClick={() => navigate("/item/" + item.item_id)}
    >
      {isMyItem && (
        <div className="absolute top-2 left-2 z-10 p-2 rounded-full bg-blue-500 text-white" />
      )}

      <img
        src={item.item_img}
        alt={item.item_name}
        className="w-24 h-30 object-cover shadow-md mb-2"
      />
      <div className="flex-1 flex flex-col">
        <div className="text-sm font-bold line-clamp-2 leading-tight">
          {item.item_name}
        </div>
        <div className="text-sm text-red-500 mt-1">¥{item.item_price}</div>
      </div>
      <button
        onClick={(e) => handleHeartClick(e, item.item_id)}
        className="absolute bottom-20 right-4 z-10 p-1 rounded-full hover:bg-black/20 transition-colors"
        aria-label={
          isFavorite.includes(item.item_id)
            ? "お気に入りから削除"
            : "お気に入りに追加"
        }
      >
        <Heart
          className={`${
            isFavorite.includes(item.item_id)
              ? "text-red-500 fill-red-500"
              : "text-white"
          } transition-colors`}
        />
      </button>
    </div>
  );
}
