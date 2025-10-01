import { useState } from 'react';
import type { User } from '@supabase/supabase-js';
import UserButton from './UserButton';
import UserDropdownMenu from './UserDropdownMenu';

interface UserMenuProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export default function UserMenu({ user, onLogin, onLogout }: UserMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!user) {
    return (
      <UserButton
        isLoggedIn={false}
        onClick={onLogin}
        ariaExpanded={false}
      />
    );
  }

  return (
    <div
      className="relative pt-2"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <UserButton
        isLoggedIn={true}
        onClick={() => setMenuOpen((v) => !v)}
        ariaExpanded={menuOpen}
      />
      {menuOpen && <UserDropdownMenu user={user} onLogout={onLogout} />}
    </div>
  );
}
