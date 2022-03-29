import { Session, User } from '@supabase/supabase-js';
import { createContext, useState, useContext, useEffect } from 'react';
import { supabaseClient } from '../lib/supabaseClient';

const Context = createContext<value>({ user: null, session: null });

type value = {
  user: User | null;
  session: Session | null;
};

const Provider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabaseClient.auth.session());
    setUser(supabaseClient.auth.user());
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(supabaseClient.auth.user());
    });
  }, []);


  return <Context.Provider value={{ user, session }}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
