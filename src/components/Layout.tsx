import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Header from './Header/index';
import Footer from './Footer';

export default function Layout() {

  type tabPathType = '/' | '/sold-items' | '/chats';

  const location = useLocation();
  const navigate = useNavigate();

  //URLから状態を取得
  const getActiveTab = () => {
    switch (location.pathname) {
      case'/chats':
        return 'chats';
      case'/sold-items':
        return 'sold-items';
      default:
        return 'home';
    }
  }

    // タブ変更時の処理
  const handleTabChange = (path: tabPathType) => {
    navigate(path); // ページ遷移なしでURLのみを変更
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto p-4">
          <Outlet />
        </div>
      </main>
      <Footer 
        activeTab={getActiveTab()} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
}
