import { useNavigate } from 'react-router-dom';
import type { User } from '@supabase/supabase-js';

interface UserDropdownMenuProps {
  user: User;
  onLogout: () => void;
}

export default function UserDropdownMenu({ user, onLogout }: UserDropdownMenuProps) {
  const navigate = useNavigate();

  return (
    <div
      role="menu"
      className="absolute left-0 top-full w-60 max-w-[90vw] bg-white border rounded-md shadow-lg p-2"
    >
      <div className="px-2 py-1 text-sm text-gray-700 whitespace-nowrap overflow-x-auto">
        {user?.email}
      </div>
      <button
        role="menuitem"
        onClick={() => navigate('/mypage')}
        className="mt-1 block w-full text-left px-2 py-2 text-sm text-blue-600 hover:bg-gray-100 rounded"
      >
        マイページ
      </button>
      <button
        role="menuitem"
        onClick={onLogout}
        className="mt-1 block w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 rounded"
      >
        ログアウト
      </button>
    </div>
  );
}
