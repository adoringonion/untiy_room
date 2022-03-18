import { useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabaseClient';

const Auth = () => {
  const [loading, setLoading] = useState(false);

  const tryLogin = async () => {
    const { user, session, error } = await supabaseClient.auth.signIn({
      provider: 'twitter',
    });

    if (error) {
      console.error(error);
      alert('Twitterログインに失敗しました');
      return;
    }
  };

  return (
    <div className='row flex flex-center'>
      <div className='col-6 form-widget'>
        <h1 className='header'>Supabase + Next.js</h1>
        <p className='description'>Sign in via magic link with your email below</p>
        <div></div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              tryLogin();
            }}
            className='button block'
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
