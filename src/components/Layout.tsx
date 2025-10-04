import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'home' | 'newItems' | 'category'>('home');

  // すべてのページでヘッダーとフッターを表示
  const showTabNavigation = ['/', '/chats', '/sellItems'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        activeTab={showTabNavigation ? activeTab : undefined}
        onTabChange={showTabNavigation ? setActiveTab : undefined}
      />
      <main className="flex-1 pt-4 pb-20">
        <div className="max-w-4xl mx-auto p-4">
          <Outlet context={{ activeTab, setActiveTab }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
