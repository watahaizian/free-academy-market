import { ArrowRight } from 'lucide-react';
import type { CategoryList } from '../types/item';
import ItemCard from './ItemCard';

interface CategorySectionProps {
  category: CategoryList;
}

export default function CategorySection({ category }: CategorySectionProps) {

  return (
     <>
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">{category.name}</h1>
        <h2 className="flex items-center gap-2 text-sm text-blue-800">すべて見る <ArrowRight /></h2>
      </div>
      <div className="flex overflow-x-auto space-x-2 py-4 snap-x snap-mandatory scrollbar-hide">
        {category.items.map((item) =>
          <div className="w-1/3 flex-shrink-0 snap-start">
            <ItemCard key={item.id} item={item} />
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
              <p className="text-base font-black text-red-500">¥{item.price.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
      </>
  );
}
