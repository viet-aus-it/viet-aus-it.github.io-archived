import RenderLayout from '../components/Template/Layout/RenderLayout';
import PureBio from '../components/Bio/PureBio';

export default {
  title: 'Bio',
  component: PureBio,
};

const author = {
  name: 'Viet-Aus-IT',
  summary: 'A group of IT Geeks',
};
const social = {
  github: 'viet-aus-it',
  discord: 'waYhnk4NKy',
  facebookPage: 'vietausit',
  facebookGroup: 'vietausit',
};
const avatar = {
  height: 500,
  width: 500,
  layout: 'fixed',
  backgroundColor: '#ffffff',
  images: {
    fallback: {
      src: '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png',
      srcSet: '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png 420w',
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
};

export const TestBio = () => (
  <RenderLayout>
    <PureBio author={author} social={social} avatar={avatar} />
  </RenderLayout>
);
