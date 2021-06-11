import { FC } from 'react';

const Footer: FC = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <footer>
      {`© ${CurrentYear}, Built with `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` Hosted on `}
      <a href="https://pages.github.com/">GitHub Pages</a>
    </footer>
  );
};

export default Footer;
