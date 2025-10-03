import { useState } from 'react';
import SearchBar from './SearchBar';
import TabNavigation from './TabNavigation';
import UserMenu from './UserMenu';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'home' | 'new' | 'category'>('home');

  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="flex items-center gap-3 px-4 py-2">
        <UserMenu user={user} onLogin={login} onLogout={logout} />
        <SearchBar />
      </div>
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </header>
  );
}
