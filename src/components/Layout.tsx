import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import TabNavigation from './TabNavigation'
import HomePage from '../pages/HomePage'
import NewArrivalsPage from '../pages/NewArrivalsPage'
import CategoryPage from '../pages/CategoryPage'
import SellPage from '../pages/SellPage'
import ProfilePage from '../pages/ProfilePage'

type TabType = 'home' | 'new' | 'category'

export default function Layout() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const location = useLocation()

  const handleLoginClick = () => {
    // ログイン処理（後で実装）
    console.log('ログインボタンがクリックされました')
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
  }

  const renderContent = () => {
    // ルートに基づいてコンテンツを決定
    switch (location.pathname) {
      case '/sell':
        return <SellPage />
      case '/profile':
        return <ProfilePage />
      default:
        // ホームページのタブコンテンツ
        switch (activeTab) {
          case 'home':
            return <HomePage />
          case 'new':
            return <NewArrivalsPage />
          case 'category':
            return <CategoryPage />
          default:
            return <HomePage />
        }
    }
  }

  const shouldShowTabNavigation = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        {/* 検索バーセクション */}
        <SearchBar onLoginClick={handleLoginClick} />
        
        {/* タブナビゲーション（ホームページのみ表示） */}
        {shouldShowTabNavigation && (
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </header>
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${
        shouldShowTabNavigation ? 'pt-32' : 'pt-20'
      }`}>
        {renderContent()}
      </main>
      
      <Navigation />
    </div>
  )
}
