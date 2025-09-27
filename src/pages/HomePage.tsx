import { ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { mockProducts, categories } from '../lib/mockData'

export default function HomePage() {
  // カテゴリごとに商品をグループ化
  const productsByCategory = categories
    .filter(category => category !== 'すべて')
    .map(category => ({
      category,
      products: mockProducts.filter(product => product.category === category)
    }))
    .filter(group => group.products.length > 0)

  return (
    <div className="space-y-6 pb-20">

      {/* カテゴリごとの商品セクション */}
      <div className="space-y-6">
        {productsByCategory.map(({ category, products }) => (
          <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            {/* カテゴリヘッダー */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {category}
              </h2>
              <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                すべて見る
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>

            {/* 商品一覧（横スクロール） */}
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-2" style={{ width: 'max-content' }}>
                {products.slice(0, 12).map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}