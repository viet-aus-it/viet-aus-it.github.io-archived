import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Bio from '../components/Bio';
import Layout from '../components/Template/Layout';
import SEO from '../components/Template/SEO';
import PostView from '../components/Template/PostView';
import getUniquePostsBySlug from '../utils/getUniquePostBySlug';

function BlogIndex({ data, location }: PagePropsType) {
  const siteTitle = data.site.siteMetadata.title;
  const contentfulPosts = data.allContentfulBlogPost.edges;
  const posts = getUniquePostsBySlug(contentfulPosts);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Helmet title={siteTitle} />
      <Bio />
      {posts.map(
        ({ node }) => node && <PostView node={node} key={node.slug} />
      )}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query AllBlogPost {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { node_locale: { eq: "en-AU" } }
    ) {
      edges {
        node {
          title
          slug
          publishDate
          description {
            description
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
