import { graphql, useStaticQuery } from 'gatsby';

function useContentfulBlogPost() {
  const data = useStaticQuery(graphql`
    query AllContentfulBlogPost {
      allContentfulBlogPost(
        sort: { fields: [publishDate], order: DESC }
        filter: { node_locale: { eq: "en-AU" } }
      ) {
        nodes {
          title
          slug
          publishDate
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  return data.allContentfulBlogPost.nodes;
}

export default useContentfulBlogPost;
