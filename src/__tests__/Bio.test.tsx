/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { Bio } from '../components';

jest.mock('../hooks/useBioQuery', () =>
  jest.fn().mockReturnValue({
    author: {
      name: 'Viet-Aus-IT',
      summary: 'A group of IT Geeks',
    },
    social: {
      github: 'viet-aus-it',
      discord: 'waYhnk4NKy',
      facebookPage: 'vietausit',
      facebookGroup: 'vietausit',
    },
    avatar: {
      height: 500,
      width: 500,
      layout: 'fixed',
      backgroundColor: '#ffffff',
      images: {
        fallback: {
          src: '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png',
          srcSet:
            '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png 420w',
          sizes: '420px',
        },
        sources: [
          {
            srcSet:
              '/static/15bedc08e38e45f354967dc7a3797c7f/c0c96/avatar.webp 420w',
            type: 'image/webp',
            sizes: '420px',
          },
        ],
      },
    },
  })
);

describe('Bio Rendering', () => {
  it('should render without crashing', () => {
    const BioComponent = <Bio />;
    const tree = render(BioComponent);
    expect(tree).toMatchSnapshot();
  });
});
