import { ReactElement } from 'react';
import UserProvider from '../contexts/UserContext';
import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => (
  <UserProvider>
    <Header />
    <main>{children}</main>
  </UserProvider>
);

export default Layout;
