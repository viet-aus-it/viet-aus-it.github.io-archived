import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Template/Layout';
import SEO from '../components/Template/SEO';
import PostView from '../components/Template/PostView';

function BlogIndex({ data, location }: PagePropsType) {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(
        ({ node }) => node && <PostView node={node} key={node.fields.slug} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
