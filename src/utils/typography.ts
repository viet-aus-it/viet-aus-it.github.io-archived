import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

const wpTypo = {
  ...Wordpress2016,
  overrideThemeStyles() {
    return {
      'a.gatsby-resp-image-link': {
        boxShadow: `none`,
      },
    };
  },
  googleFonts: [],
};

const typography = new Typography(wpTypo);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
