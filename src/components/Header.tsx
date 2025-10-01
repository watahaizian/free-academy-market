import { useState } from 'react';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import TabNavigation from './TabNavigation';

type TabType = 'home' | 'new' | 'category';

export default function Header() {
  // 状態管理：現在アクティブなタブ
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="flex items-center gap-3 px-4 py-2">
        {/* ログインボタン */}
        <LoginButton />
        {/* 検索バー */}
        <SearchBar />
      </div>

      {/* タブナビゲーション */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </header>
  );
}
