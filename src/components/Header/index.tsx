import SearchBar from './SearchBar';
import TabNavigation from './TabNavigation';
import UserMenu from './UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
interface HeaderProps {
  activeTab?: 'home' | 'newItems' | 'category';
  onTabChange?: (tab: 'home' | 'newItems' | 'category') => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
=======
export default function Header() {
  const navigate = useNavigate();
>>>>>>> a67d4c33bf49ad5b97404214b8948245a468cde8
  const { user, login, logout } = useAuth();

  const handleTabChange = (tab: 'home' | 'new' | 'category') => {
    setActiveTab(tab);
    if (tab === 'home') {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="flex items-center gap-3 px-4 py-2">
        <UserMenu user={user} onLogin={login} onLogout={logout} />
        <SearchBar />
      </div>
<<<<<<< HEAD
      {activeTab && onTabChange && (
        <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />
      )}
=======
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
>>>>>>> a67d4c33bf49ad5b97404214b8948245a468cde8
    </header>
  );
}
