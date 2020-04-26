declare module 'typography-theme-wordpress-2016';

type LocationType = {
  pathname: string;
};

type Post = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
  html: Element;
  node: Post;
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
