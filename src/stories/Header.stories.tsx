import React from 'react';
import Header from '../components/Template/Header';
import { rhythm } from '../utils/typography';

export default {
  title: 'Header',
  component: Header,
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    {children}
  </div>
);

const title = 'Viet-Aus-IT Blog';

export const HeaderRootPath = () => (
  <Layout>
    <Header isRootPath title={title} />
  </Layout>
);

export const HeaderNonRoot = () => (
  <Layout>
    <Header isRootPath={false} title={title} />
  </Layout>
);
