import type { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RenderLayout from './RenderLayout';

interface LayoutProps {
  location: LocationType;
  title: string;
  children: ReactNode | Element;
}

function Layout({ location, title, children }: LayoutProps) {
  // This is not going to be undef, since it's going to be passed in upon build.
  // @ts-ignore
  const pathPrefix = __PATH_PREFIX__;
  const rootPath = `${pathPrefix}/`;

  return (
    <RenderLayout>
      <Header title={title} isRootPath={location.pathname === rootPath} />
      <main>{children}</main>
      <Footer />
    </RenderLayout>
  );
}

export default Layout;
