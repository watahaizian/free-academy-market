import { Home, MessageCircle, Plus } from 'lucide-react';

type FooterTabType = 'home' | 'sold-items' | 'chats';
type tabPathType = '/' | '/sold-items' | '/chats';

interface FooterProps {
  activeTab: FooterTabType;
  onTabChange: (tab: tabPathType) => void;
}

export default function Footer({ activeTab, onTabChange }: FooterProps) {
  const tabs = [
    { id: 'home' as FooterTabType, label: 'ホーム', icon: Home, path: '/' },
    { id: 'soldItems' as FooterTabType, label: '出品', icon: Plus, path: '/sold-items' },
    { id: 'chats' as FooterTabType, label: 'チャット', icon: MessageCircle, path: '/chats' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.path as tabPathType)}
              className={`flex flex-col items-center font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
