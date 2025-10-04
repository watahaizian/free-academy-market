import { useAuth } from "../hooks/useAuth";

function Settings() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">ログインが必要です</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">マイページ</h1>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-3">アカウント情報</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">メール:</span> {user.email}</p>
          <p><span className="font-medium">登録日:</span> {new Date(user.created_at).toLocaleDateString('ja-JP')}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-600">
            プロフィール編集機能は今後追加予定です。
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;