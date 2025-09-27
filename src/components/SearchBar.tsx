import { Search, User } from 'lucide-react'

interface SearchBarProps {
  onLoginClick: () => void
}

export default function SearchBar({ onLoginClick }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      {/* ログインボタン */}
      <button
        onClick={onLoginClick}
        className="flex flex-col items-center py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
      >
        <User size={20} />
        <span className="text-xs font-medium mt-1">ログイン</span>
      </button>
      
      {/* 検索バー */}
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="商品を検索..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>
    </div>
  )
}
