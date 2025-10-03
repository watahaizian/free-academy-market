import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex-1 relative">
      <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-10 w-8 text-gray-400" />
      <input
        type="text"
        placeholder="商品を検索..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
      />
    </div>
  );
}
