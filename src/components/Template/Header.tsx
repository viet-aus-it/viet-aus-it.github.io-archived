import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../../utils/typography';

type HeaderProps = {
  isRootPath: boolean;
  title: string;
};

function Header({ isRootPath, title }: HeaderProps) {
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

  const HeaderContent = isRootPath ? (
    <h2
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      {LinkContent}
    </h2>
  ) : (
    <h4
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      {LinkContent}
    </h4>
  );

  return <header>{HeaderContent}</header>;
}

export default Header;
