import { useState } from 'react';
import { Search, User } from 'lucide-react';
import TabNavigation from './TabNavigation';

type TabType = 'home' | 'new' | 'category';

// タブコンテンツコンポーネント（仮）
function HomeContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ホーム</h2>
      <p>ようこそ！最新の商品情報をお届けします。</p>
    </div>
  );
}

function NewContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">新着商品</h2>
      <p>最新の商品が表示されます。</p>
    </div>
  );
}

function CategoryContent() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">カテゴリ一覧</h2>
      <p>商品カテゴリが表示されます。</p>
    </div>
  );
}

export default function Header() {
  // 状態管理：現在アクティブなタブ
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="flex items-center gap-3 px-4 py-2">
          {/* ログインボタン */}
          <button className="flex flex-col items-center py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">
            <User size={20} />
            <span className="text-xs font-medium mt-1">ログイン</span>
          </button>
          {/* 検索バー */}
          <div className="flex-1 relative">
            <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-10 w-8 text-gray-400" />
            <input
              type="text"
              placeholder="商品を検索..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* タブナビゲーション */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </header>

      {/* メインコンテンツ */}
      <main className="pt-32">
        <div className="max-w-4xl mx-auto p-4">
          {activeTab === 'home' && <HomeContent />}
          {activeTab === 'new' && <NewContent />}
          {activeTab === 'category' && <CategoryContent />}
        </div>
      </main>
    </div>
  );
}
