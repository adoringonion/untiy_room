import { useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabaseClient';
import { User, Session } from '@supabase/supabase-js';

type Props = {
    session : Session
}

const Account: React.VFC<Props> = ({session}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, [session]);

  const getUser = async () => {
    const user = supabaseClient.auth.user();
    if (user !== null) {
      setUser(user);
      console.log(user);
    }
  };

  const logout = async () => {
    await supabaseClient.auth.signOut();  
  };

  return (
    <div>
      <h1>Account</h1>
      <p>{user?.user_metadata["user_name"]}</p>
      <img src={user?.user_metadata["avatar_url"]} alt="" />
      <button onClick={logout}>
          Logout
      </button>
    </div>
  );
}

export default Account;
