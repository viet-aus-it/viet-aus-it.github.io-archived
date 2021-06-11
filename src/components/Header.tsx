import { FC } from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

interface HeaderProps {
  isRootPath: boolean;
  title: string;
}

const Header: FC<HeaderProps> = ({ isRootPath, title }) => {
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

  const RootHeader = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      {LinkContent}
    </h1>
  );

  const PageHeader = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      {LinkContent}
    </h3>
  );

  const HeaderContent = isRootPath ? RootHeader : PageHeader;

  return <header>{HeaderContent}</header>;
};

export default Header;
