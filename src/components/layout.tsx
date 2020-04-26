import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

type LayoutProps = {
  location: LocationType;
  title: string;
  children: React.ReactNode | Element;
};

function Layout({ location, title, children }: LayoutProps) {
  // This is not going to be undef, since it's going to be passed in upon build.
  // eslint-disable-next-line no-undef
  const pathPrefix = __PATH_PREFIX__;
  const rootPath = `${pathPrefix}/`;
  const CurrentYear = new Date().getFullYear();
  const LinkContent = (
    <Link
      style={{
        boxShadow: `none`,
        color: `inherit`,
      }}
      to="/"
    >
      {title}
    </Link>
  );

  const header =
    location.pathname === rootPath ? (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        {LinkContent}
      </h1>
    ) : (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        {LinkContent}
      </h3>
    );

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        {`© ${CurrentYear}, Built with `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout;
