const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;
if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  );
}

module.exports = {
  siteTitle: 'Viet-Aus-IT Blog',
  siteUrl: 'https://viet-aus-it.github.io',
  siteDescription: 'Viet-aus-it blog',
  manifest: {
    name: 'Viet-aus-it blog',
    shortName: 'Home',
    startUrl: '/',
    backgroundColor: '#FFFFFF',
    themeColor: '#663399',
    display: 'minimal-ui',
    icon: 'content/assets/gatsby-icon.png',
  },
  author: {
    name: 'Vietnamese Aussies in IT',
    summary: 'A group of IT Geeks in Australia',
  },
  contributors: {
    name: 'Sam Huynh',
    email: 'samhwang2112.dev@gmail.com',
    github: 'samhwang',
  },
  socialLinks: {
    github: 'viet-aus-it',
  },
  contentfulConfig,
};
