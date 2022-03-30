import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { createContext, useState, useContext, useEffect } from 'react';
import { supabaseClient } from '../lib/supabaseClient';

const Context = createContext<value>({
  session: null,
  tryLogin: async () => {},
  logout: async () => {},
});

type value = {
  session: Session | null;
  tryLogin: () => Promise<void>;
  logout: () => void;
};

const UserProvider = ({ children }: { children: any }) => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    setSession(supabaseClient.auth.session());
    const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      handleAuthChange(_event, session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const tryLogin = async () => {
    await supabaseClient.auth.signIn({
      provider: 'twitter',
    });
  };

  const logout = async () => {
    await supabaseClient.auth.signOut();
    setSession(null);
    router.push('/');
  };

  const handleAuthChange = async (event: AuthChangeEvent, session: Session | null) => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  const exposed = {
    session,
    tryLogin,
    logout,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default UserProvider;
