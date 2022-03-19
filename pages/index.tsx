import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Auth from '../components/Auth';
import styles from '../styles/Home.module.css';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabaseClient';
import Account from '../components/Account';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <div className='container'>
          <Link href='/test-page'>
            <a>Go to test page</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
