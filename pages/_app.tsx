import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import Provider from '../contexts/UserContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
};

export default MyApp;
