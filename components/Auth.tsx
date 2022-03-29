import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../lib/supabaseClient';

const Auth = () => {
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
    <Button
      onClick={(e) => {
        e.preventDefault();
        tryLogin();
      }}
      variant={'solid'}
      colorScheme={'teal'}
      size={'sm'}
      mr={4}
    >
      {'Twitterログイン'}
    </Button>
  );
};

export default Auth;
