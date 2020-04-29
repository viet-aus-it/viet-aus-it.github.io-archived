declare module 'typography-theme-wordpress-2016';

type LocationType = {
  pathname: string;
};

type Post = {
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
};

type SiteDataType = {
  markdownRemark: Post;
  allMarkdownRemark: {
    edges: Post[];
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

type PagePropsType = {
  data: SiteDataType;
  location: LocationType;
};

type Author = {
  name: string;
  summary: string;
};

type SocialLink = {
  github: string;
};

type FixedImageProps = {
  height: number;
  width: number;
  src: string;
  srcSet: string;
  base64: string;
};
