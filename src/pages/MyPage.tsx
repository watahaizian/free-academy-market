import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

export default function MyPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (user?.user_metadata) {
      setName(user.user_metadata.original_name || '');
      setIcon(user.user_metadata.user_icon || '');
      setBio(user.user_metadata.bio || '');
    }
  }, [user]);

  const save = async () => {
    await supabase.auth.updateUser({
      data: { 
        original_name: name, 
        user_icon: icon, 
        bio: bio,
        school_name: user?.user_metadata?.school_name,
        grade: user?.user_metadata?.grade
      }
    });
    setEdit(false);
    alert('更新しました');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl mb-4">マイページ</h1>
      
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between">
          <h2 className="font-medium">プロフィール</h2>
          {!edit && <button onClick={() => setEdit(true)} className="px-2 py-1 text-xs border rounded">編集</button>}
        </div>

        {edit ? (
          <div className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded text-sm"
              placeholder="名前"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border rounded text-sm"
              placeholder="自己紹介文"
              rows={3}
            />
            <div className="flex gap-2">
              <button onClick={save} className="px-3 py-1 text-sm border rounded">保存</button>
              <button onClick={() => setEdit(false)} className="px-3 py-1 text-sm border rounded">キャンセル</button>
            </div>
          </div>
        ) : (
          <div className="space-y-1 text-sm">
            <p><strong>名前:</strong> {user?.user_metadata?.original_name || '未設定'}</p>
            <p><strong>学校:</strong> {user?.user_metadata?.school_name || '未設定'}</p>
            <p><strong>学年:</strong> {user?.user_metadata?.grade ? `${user.user_metadata.grade}年生` : '未設定'}</p>
            <p><strong>メール:</strong> {user?.email}</p>
            <p><strong>自己紹介:</strong></p>
            <p className="ml-2 text-gray-600">{user?.user_metadata?.bio || '未設定'}</p>
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={() => navigate('/')} className="px-3 py-1 text-sm border rounded flex-1">ホーム</button>
          <button onClick={() => { logout(); navigate('/login'); }} className="px-3 py-1 text-sm border rounded flex-1">ログアウト</button>
        </div>
      </div>
    </div>
  );
}
