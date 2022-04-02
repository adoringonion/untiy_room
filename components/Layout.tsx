import { ReactElement } from 'react';
import Header from './Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
