import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Product } from '../lib/mockData'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'compact'
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours}時間前`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}日前`
    }
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  // コンパクトバージョン
  if (variant === 'compact') {
    return (
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative w-32 flex-shrink-0">
          {/* 商品画像 */}
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-32 object-cover rounded-lg"
            />
            
            {/* お気に入りボタン */}
            <button
              onClick={handleFavoriteClick}
              className="absolute top-2 left-2 p-1 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
            >
              <Heart 
                size={16} 
                className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
              />
            </button>
            
            {/* 売り切れ表示 */}
            {product.isSold && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                売切
              </div>
            )}
          </div>
          
          {/* 商品情報 */}
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
              {product.title}
            </h3>
            <p className="text-sm font-bold text-blue-600 mt-1">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  // デフォルトバージョン（詳細表示用）
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          {product.isSold && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
              売り切れ
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {product.title}
            </h3>
            <span className="text-lg font-bold text-blue-600 ml-2">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-xs font-medium text-gray-600">
                  {product.seller.avatar}
                </span>
              </div>
              <span className="text-sm text-gray-500">{product.seller.name}</span>
            </div>
            <span className="text-xs text-gray-400">
              {formatDate(product.createdAt)}
            </span>
          </div>
          
          <div className="mt-2">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}