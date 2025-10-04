import ItemCard from '../components/ItemCard';
import type { CategoryItem } from '../types/item';

interface NewItemsProps {
  items: CategoryItem[];
}

export default function NewItems({ items }: NewItemsProps) {
  return (
    <div className="flex flex-wrap snap-x snap-mandatory scrollbar-hide">
    {items.map((item) =>
      <div key={item.id} className="w-1/3 flex-shrink-0 snap-start">
        <ItemCard item={item} />
        <div className="mb-2">
          <p className="text-base font-black text-red-500">¥{item.price.toLocaleString()}</p>
        </div>
      </div>
    )}
  </div>
  );
}
