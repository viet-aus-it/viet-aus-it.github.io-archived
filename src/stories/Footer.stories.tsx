import React from 'react';
import Footer from '../components/Template/Footer';
import { rhythm } from '../utils/typography';

export default {
  title: 'Footer',
  component: Footer,
};

export const FooterTest = () => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <Footer />
  </div>
);
