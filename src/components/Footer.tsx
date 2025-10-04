import { Link } from 'react-router-dom';
import { Home, MessageCircle, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [activeTab, setActiveTab] = useState("home");
  const isActive = (tabId: string) => activeTab === tabId;

  const tabs = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "sellItems", label: "出品", icon: Plus, path: "/SellItems" },
    { id: "chats", label: "Chats", icon: MessageCircle, path: "/Chats" },
  ]
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <Link
            className="flex flex-col items-center font-medium text-sm transition-colors"
            key={tab.id}
            to={tab.path}
            onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className={isActive(tab.id) ? "text-blue-500 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"} />
              <p className={isActive(tab.id) ? "text-blue-500 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"}>{tab.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
