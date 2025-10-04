import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import UserButton from './UserButton';
import UserDropdownMenu from './UserDropdownMenu';
import { supabase } from '../../../lib/supabase';

interface UserMenuProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export default function UserMenu({ user, onLogin, onLogout }: UserMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('user_icon')
        .eq('id', user?.id)
        .maybeSingle();

      if (!error && data?.user_icon) {
        setAvatarUrl(data.user_icon);
      } else {
        setAvatarUrl(null);
      }
    })();
  }, [user]);

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
        avatarUrl={avatarUrl}
      />
      {menuOpen && <UserDropdownMenu user={user} onLogout={onLogout} setMenuOpen={setMenuOpen} />}
    </div>
  );
}
