import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { hasuraClient } from '../lib/hasuraClient';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ApolloProvider client={hasuraClient}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default MyApp;
