import { useState } from 'react'
import { Edit, Settings, LogOut, Package, Heart, MessageCircle } from 'lucide-react'
import { mockProducts } from '../lib/mockData'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'products' | 'favorites' | 'chats'>('products')
  
  // 現在のユーザーの出品商品（ダミーデータ）
  const userProducts = mockProducts.filter(product => product.seller.id === 'user1')
  
  // お気に入り商品（ダミーデータ）
  const favoriteProducts = mockProducts.slice(0, 3)

  const tabs = [
    { id: 'products', label: '出品商品', icon: Package, count: userProducts.length },
    { id: 'favorites', label: 'お気に入り', icon: Heart, count: favoriteProducts.length },
    { id: 'chats', label: 'チャット', icon: MessageCircle, count: 0 }
  ]

  return (
    <div className="space-y-6 pb-20">
      {/* プロフィール情報 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-medium">田</span>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">田中太郎</h1>
            <p className="text-gray-600">tanaka@univ.ac.jp</p>
            <p className="text-sm text-gray-500 mt-1">
              2024年1月に登録
            </p>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Edit size={20} />
          </button>
        </div>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">{userProducts.length}</div>
          <div className="text-sm text-gray-500">出品中</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">12</div>
          <div className="text-sm text-gray-500">売却済み</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-yellow-600">4.8</div>
          <div className="text-sm text-gray-500">評価</div>
        </div>
      </div>

      {/* タブナビゲーション */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center py-4 px-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* タブコンテンツ */}
        <div className="p-6">
          {activeTab === 'products' && (
            <div className="space-y-4">
              {userProducts.length === 0 ? (
                <div className="text-center py-8">
                  <Package size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">出品している商品がありません</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {userProducts.map(product => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          ¥{product.price.toLocaleString()}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          product.isSold 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {product.isSold ? '売り切れ' : '出品中'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="space-y-4">
              {favoriteProducts.length === 0 ? (
                <div className="text-center py-8">
                  <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">お気に入りの商品がありません</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favoriteProducts.map(product => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">
                          ¥{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500">{product.seller.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'chats' && (
            <div className="text-center py-8">
              <MessageCircle size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">チャット履歴がありません</p>
            </div>
          )}
        </div>
      </div>

      {/* 設定メニュー */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">設定</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-2">
              <div className="flex items-center">
                <Settings size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-700">アカウント設定</span>
              </div>
              <span className="text-gray-400">{'>'}</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 rounded-lg px-2">
              <div className="flex items-center">
                <LogOut size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-700">ログアウト</span>
              </div>
              <span className="text-gray-400">{'>'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
