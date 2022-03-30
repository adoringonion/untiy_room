import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import Provider from '../contexts/UserContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
