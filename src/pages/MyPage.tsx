import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function MyPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">マイページ</h1>
      
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <h2 className="font-medium mb-3">ユーザー情報</h2>
          
          {/* 基本情報 */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">基本情報</h3>
            <div className="space-y-1 text-sm">
              <p><strong>ユーザーID:</strong> {user?.id || '未取得'}</p>
              <p><strong>メールアドレス:</strong> {user?.email || '未設定'}</p>
              <p><strong>名前:</strong> {user?.user_metadata?.original_name || '未設定'}</p>
              <p><strong>学校名:</strong> {user?.user_metadata?.school_name || '未設定'}</p>
              <p><strong>学年:</strong> {user?.user_metadata?.grade ? `${user.user_metadata.grade}年生` : '未設定'}</p>
              <p><strong>ユーザーアイコン:</strong> {user?.user_metadata?.user_icon || '未設定'}</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button onClick={() => navigate('/')} className="px-3 py-1 text-sm border rounded">
              ホーム
            </button>
            <button onClick={handleLogout} className="px-3 py-1 text-sm border rounded">
              ログアウト
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
