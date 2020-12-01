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

interface FixedImageProps {
  height: number;
  width: number;
  src: string;
  srcSet: string;
  base64: string;
}
