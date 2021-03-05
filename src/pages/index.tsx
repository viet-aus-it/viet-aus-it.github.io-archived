import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Bio from '../components/Bio';
import Layout from '../components/Template/Layout';
import SEO from '../components/Template/SEO';
import PostView from '../components/Template/PostView';

function BlogIndex({ data, location }: PagePropsType) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allContentfulBlogPost.edges;

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
  query {
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
