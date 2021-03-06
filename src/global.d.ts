declare module 'typography-theme-wordpress-2016';

interface LocationType {
  pathname: string;
}

interface ContentfulPost {
  title: string;
  slug: string;
  publishDate: string;
  description: {
    description: string;
  };
  body: {
    childMarkdownRemark: {
      excerpt?: string;
      html?: string;
    };
  };
}
interface AllContentfulPosts {
  edges: [
    {
      node: ContentfulPost;
    }
  ];
}

interface SiteDataType {
  allContentfulBlogPost: AllContentfulPosts;
  contentfulBlogPost: ContentfulPost;
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
