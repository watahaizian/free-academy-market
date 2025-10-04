import { User as UserIcon } from 'lucide-react';

interface UserButtonProps {
  isLoggedIn: boolean;
  onClick: () => void;
  ariaExpanded: boolean;
  avatarUrl?: string | null;
}

export default function UserButton({ isLoggedIn, onClick, ariaExpanded, avatarUrl }: UserButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
      onClick={onClick}
      aria-haspopup="menu"
      aria-expanded={ariaExpanded}
    >{isLoggedIn && avatarUrl ? (
      <img
        src={avatarUrl}
        alt="ユーザーアイコン"
        className="h-6 w-6 rounded-full object-cover border"
        referrerPolicy="no-referrer"
      />
    ) : (
      <UserIcon size={20} />
    )}
      <span className="text-xs font-medium mt-1">{isLoggedIn ? 'ログイン中' : 'ログインする'}</span>
    </button>
  );
}
