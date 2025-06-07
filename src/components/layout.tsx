import { ReactNode } from 'react';
import { Fragment } from 'react';
import MainHeader from './main-header';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
