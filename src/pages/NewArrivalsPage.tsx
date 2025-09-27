import { useState, useEffect, useCallback } from 'react'
import SimpleProductCard from '../components/SimpleProductCard'
import { mockProducts, Product } from '../lib/mockData'

export default function NewArrivalsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const ITEMS_PER_PAGE = 12

  // 新着順でソートされた商品リストを取得
  const getSortedProducts = useCallback(() => {
    return [...mockProducts]
      .filter(product => !product.isSold) // 売り切れでない商品のみ
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [])

  // 商品を読み込む関数
  const loadProducts = useCallback(async (pageNum: number) => {
    setLoading(true)
    
    // 実際のAPIコールのシミュレーション
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const sortedProducts = getSortedProducts()
    const startIndex = (pageNum - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const newProducts = sortedProducts.slice(startIndex, endIndex)
    
    if (pageNum === 1) {
      setProducts(newProducts)
    } else {
      setProducts(prev => [...prev, ...newProducts])
    }
    
    setHasMore(endIndex < sortedProducts.length)
    setLoading(false)
  }, [getSortedProducts])

  // 初期読み込み
  useEffect(() => {
    loadProducts(1)
  }, [loadProducts])

  // 無限スクロールの処理
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return

    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight

    // ページの下部に近づいたら次のページを読み込む
    if (scrollTop + clientHeight >= scrollHeight - 1000) {
      const nextPage = page + 1
      setPage(nextPage)
      loadProducts(nextPage)
    }
  }, [loading, hasMore, page, loadProducts])

  // スクロールイベントリスナーを追加
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="space-y-6 pb-20">
      {/* ページヘッダー */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-gray-900">新着商品</h1>
        <p className="text-gray-600 mt-1">最新の商品をチェックしよう</p>
      </div>

      {/* 商品グリッド */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {products.map(product => (
          <SimpleProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>

      {/* ローディング表示 */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* これ以上商品がない場合の表示 */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>すべての商品を表示しました</p>
        </div>
      )}

      {/* 商品がない場合の表示 */}
      {!loading && products.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>新着商品がありません</p>
        </div>
      )}
    </div>
  )
}
