import type { ReactNode } from 'react';
import { rhythm } from '../../../utils/typography';

interface RenderProps {
  children: ReactNode;
}

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
