const dotenv = require('dotenv');

dotenv.config({
  path: `.env`,
});

function getContentfulConfig() {
  const deliverySpace = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    host: 'cdn.contentful.com',
  };

  const previewSpace = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  };

  const isProduction = process.env.NODE_ENV === 'production';
  const contentfulConfig = isProduction ? deliverySpace : previewSpace;

  const { spaceId, accessToken } = contentfulConfig;
  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the access token need to be provided.'
    );
  }

  return contentfulConfig;
}

module.exports = {
  siteTitle: 'Viet-Aus-IT Blog',
  siteUrl: 'https://viet-aus-it.github.io',
  siteDescription: 'A blog for VAIT - Vietnamese Aussies in I.T.',
  manifest: {
    name: 'A blog for VAIT - Vietnamese Aussies in I.T.',
    short_name: 'Home',
    start_url: '/',
    background_color: '#FFFFFF',
    theme_color: '#663399',
    display: 'minimal-ui',
    icon: 'assets/gatsby-icon.png',
  },
  author: {
    name: 'Vietnamese Aussies in IT',
    summary: 'A group of IT Geeks in Australia',
  },
  socialLinks: {
    github: 'viet-aus-it',
    discord: 'waYhnk4NKy',
    facebookPage: 'vietausit',
    facebookGroup: 'vietausit',
  },
  contentfulConfig: getContentfulConfig(),
};
