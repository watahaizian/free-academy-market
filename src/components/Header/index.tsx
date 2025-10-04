import SearchBar from './SearchBar';
import TabNavigation from './TabNavigation';
import UserMenu from './UserMenu';
import { useAuth } from '../../hooks/useAuth';

interface HeaderProps {
  activeTab?: 'home' | 'newItems' | 'category';
  onTabChange?: (tab: 'home' | 'newItems' | 'category') => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const { user, login, logout } = useAuth();

  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="flex items-center gap-3 px-4 py-2">
        <UserMenu user={user} onLogin={login} onLogout={logout} />
        <SearchBar />
      </div>
      {activeTab && onTabChange && (
        <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />
      )}
    </header>
  );
}
