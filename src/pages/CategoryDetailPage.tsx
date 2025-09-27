import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { mockProducts } from '../lib/mockData'
import SimpleProductCard from '../components/SimpleProductCard'

// カテゴリIDとカテゴリ名のマッピング
const categoryMap: { [key: string]: string } = {
  'textbook': '教科書',
  'reference': '参考書',
  'electronics': 'PC・電子機器',
  'furniture': '家具・インテリア',
  'bicycle': '自転車',
  'appliance': '家電',
  'others': 'その他'
}

export default function CategoryDetailPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  
  if (!categoryId || !categoryMap[categoryId]) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">カテゴリが見つかりません</h1>
          <Link 
            to="/category" 
            className="text-blue-600 hover:text-blue-800"
          >
            カテゴリ一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  const categoryName = categoryMap[categoryId]
  
  // カテゴリに基づいて商品をフィルタリング
  const filteredProducts = mockProducts.filter(product => {
    if (categoryId === 'electronics') {
      return product.category === 'PC・電子機器'
    } else if (categoryId === 'furniture') {
      return product.category === '家具・インテリア'
    } else if (categoryId === 'appliance') {
      return product.category === '家電'
    } else if (categoryId === 'bicycle') {
      return product.category === '自転車'
    } else if (categoryId === 'textbook') {
      return product.category === '教科書'
    } else if (categoryId === 'reference') {
      return product.category === '参考書'
    } else if (categoryId === 'others') {
      return product.category === 'その他'
    }
    return false
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* ヘッダー */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link 
                to="/category"
                className="p-2 text-gray-500 hover:text-gray-700 mr-2"
              >
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">{categoryName}</h1>
            </div>
            <Link 
              to="/"
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <Search size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* 商品一覧 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                {filteredProducts.length}件の商品が見つかりました
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <SimpleProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {categoryName}の商品が見つかりません
            </h3>
            <p className="text-gray-500 mb-6">
              このカテゴリにはまだ商品がありません
            </p>
            <Link 
              to="/category"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              他のカテゴリを見る
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
