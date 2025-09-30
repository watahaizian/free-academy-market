import { Search, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

import { useEffect, useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMenuOpen(false);
    navigate('/login');
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="flex items-center gap-3 px-4 py-2">
        {/* ユーザーメニュー */}
        {user ? (
          <div
            className="relative pt-2"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className="flex flex-col items-center py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              <UserIcon size={20} />
              <span className="text-xs font-medium mt-1">ログイン中</span>
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full w-60 max-w-[90vw] bg-white border rounded-md shadow-lg p-2"
              >
                <div className="px-2 py-1 text-sm text-gray-700 whitespace-nowrap overflow-x-auto">
                  {user.email}
                </div>
                <button
                  role="menuitem"
                  onClick={handleLogout}
                  className="mt-1 block w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 rounded"
                >
                  ログアウト
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="flex flex-col items-center py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
            onClick={() => navigate('/login')}
          >
            <UserIcon size={20} />
            <span className="text-xs font-medium mt-1">ログインする</span>
          </button>
        )}

        {/* 検索バー */}
        <div className="flex-1 relative">
          <Search className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-10 w-8 text-gray-400" />
          <input
            type="text"
            placeholder="商品を検索..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
          />
        </div>
      </div>
    </header>
  );
}