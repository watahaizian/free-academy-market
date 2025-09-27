import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { Product } from '../lib/mockData'

interface SimpleProductCardProps {
  product: Product
}

export default function SimpleProductCard({ product }: SimpleProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="relative">
        {/* 商品画像 */}
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
          
          {/* お気に入りボタン */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 left-2 p-1.5 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all shadow-sm"
          >
            <Heart 
              size={18} 
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
            />
          </button>
          
          {/* 売り切れ表示 */}
          {product.isSold && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              売切
            </div>
          )}
        </div>
        
        {/* 価格表示 */}
        <div>
          <p className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  )
}
