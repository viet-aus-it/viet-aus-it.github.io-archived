import React from 'react';
import { rhythm } from '../../../utils/typography';

type RenderProps = {
  children: React.ReactNode;
};

function RenderLayout({ children }: RenderProps) {
  return (
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
}

export default RenderLayout;
