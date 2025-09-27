import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Heart, Share } from 'lucide-react'
import { mockProducts } from '../lib/mockData'

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = mockProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">商品が見つかりませんでした</p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          ホームに戻る
        </Link>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-6 pb-20">
      {/* 戻るボタン */}
      <Link 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft size={20} className="mr-2" />
        戻る
      </Link>

      {/* 商品画像 */}
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-64 sm:h-80 object-cover rounded-lg"
        />
        {product.isSold && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
            売り切れ
          </div>
        )}
      </div>

      {/* 商品情報 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900 flex-1">
            {product.title}
          </h1>
          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 text-gray-400 hover:text-red-500">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-500">
              <Share size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* 出品者情報 */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">出品者</h3>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-medium text-gray-600">
                {product.seller.avatar}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{product.seller.name}</p>
              <p className="text-sm text-gray-500">
                出品日: {formatDate(product.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* アクションボタン */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {product.isSold ? (
            <button 
              disabled
              className="w-full py-3 px-4 bg-gray-300 text-gray-500 rounded-lg font-medium"
            >
              売り切れ
            </button>
          ) : (
            <Link
              to={`/chat/${product.id}`}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <MessageCircle size={20} className="mr-2" />
              購入希望・質問する
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
