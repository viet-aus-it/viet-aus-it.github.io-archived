import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { rhythm } from '../../utils/typography';

type LayoutProps = {
  location: LocationType;
  title: string;
  children: React.ReactNode | Element;
};

function Layout({ location, title, children }: LayoutProps) {
  // This is not going to be undef, since it's going to be passed in upon build.
  // @ts-ignore
  // eslint-disable-next-line no-undef
  const pathPrefix = __PATH_PREFIX__;
  const rootPath = `${pathPrefix}/`;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} isRootPath={location.pathname === rootPath} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
