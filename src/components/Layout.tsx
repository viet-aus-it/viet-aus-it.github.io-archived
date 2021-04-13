import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { rhythm } from '../utils/typography';

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
  const isRootPath = location.pathname === rootPath;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} isRootPath={isRootPath} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
