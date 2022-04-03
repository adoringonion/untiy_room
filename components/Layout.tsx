import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import { Children, ReactElement } from 'react';
import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main children={children} />
  </>
);

const Main = ({ children }: LayoutProps) => (
  <>
    <main>
      <Box bg={useColorModeValue('gray.50', 'gray.800')}>{children}</Box>
    </main>
  </>
);

export default Layout;
