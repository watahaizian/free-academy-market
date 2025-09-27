import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Laptop, 
  Home, 
  Book, 
  Bike, 
  Zap, 
  MoreHorizontal,
  Search
} from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
  bgColor: string
}

const categories: Category[] = [
  {
    id: 'textbook',
    name: '教科書',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'reference',
    name: '参考書',
    icon: Book,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 'electronics',
    name: 'PC・電子機器',
    icon: Laptop,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'furniture',
    name: '家具・インテリア',
    icon: Home,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'bicycle',
    name: '自転車',
    icon: Bike,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    id: 'appliance',
    name: '家電',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'others',
    name: 'その他',
    icon: MoreHorizontal,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100'
  }
]

export default function CategoryPage() {
  return (
    <div className="space-y-6 pb-20">
      {/* カテゴリグリッド */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:scale-105">
                  {/* アイコン */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon 
                      size={32} 
                      className={category.color}
                    />
                  </div>
                  
                  {/* カテゴリ名 */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* おすすめセクション */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">おすすめカテゴリ</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link 
            to="/category/textbook"
            className="flex items-center p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">教科書</span>
          </Link>
          <Link 
            to="/category/electronics"
            className="flex items-center p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <Laptop size={20} className="text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">PC・電子機器</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
