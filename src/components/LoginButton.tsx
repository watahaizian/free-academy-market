import { User } from 'lucide-react';

export default function LoginButton() {
  return (
    <button className="flex flex-col items-center py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">
      <User size={20} />
      <span className="text-xs font-medium mt-1">ログイン</span>
    </button>
  );
}
