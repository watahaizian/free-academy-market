import { useState } from 'react';
import Header from './Header/index';
import Footer from './Footer';
import Home from '../pages/Home';
import Chats from '../pages/Chats';
import SoldItem from '../pages/SoldItem';

type FooterTabType = 'home' | 'soldItems' | 'chats';

export default function Layout() {
  const [activeFooterTab, setActiveFooterTab] = useState<FooterTabType>('home');

  const renderContent = () => {
    switch (activeFooterTab) {
      case 'home':
        return <Home />;
      case 'chats':
        return <Chats />;
      case 'soldItems':
        return <SoldItem />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto p-4">
          {renderContent()}
        </div>
      </main>
      <Footer 
        activeTab={activeFooterTab} 
        onTabChange={setActiveFooterTab} 
      />
    </div>
  );
}
