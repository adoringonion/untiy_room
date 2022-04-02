import { useAtom } from 'jotai';
import { Router, useRouter } from 'next/router';
import { useEffect, VFC } from 'react';
import { sessionAtom } from '../lib/authProvider';

export const RequiredAuth = ({ children }: { children: React.ReactElement }) => {
  const [session] = useAtom(sessionAtom);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);

  return session ? children : null;
};
