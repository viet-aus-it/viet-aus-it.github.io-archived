declare module 'typography-theme-wordpress-2016';

interface LocationType {
  pathname: string;
}

interface Post {
  fields: {
    slug: string;
  };
  frontmatter: {
    title?: string;
    date: string;
    description?: string;
  };
  html?: string;
  excerpt?: string;
  node?: Post;
}

interface SiteDataType {
  markdownRemark: Post;
  allMarkdownRemark: {
    edges: Post[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

interface PagePropsType {
  data: SiteDataType;
  location: LocationType;
}

interface Author {
  name: string;
  summary: string;
}

interface SocialLink {
  github: string;
}

interface GatsbyImageData {
  height: number;
  width: number;
  layout: string;
  backgroundColor: string;
  images: {
    fallback: {
      src: string;
      srcSet: string;
      sizes: string;
    };
    sources: [
      {
        srcSet: string;
        type: string;
        sizes: string;
      }
    ];
  };
}
