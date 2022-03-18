import { ReactElement } from 'react';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => (
  <>
    <main>{children}</main>
  </>
);

export default Layout;
