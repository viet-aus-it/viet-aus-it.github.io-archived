import { useStaticQuery, graphql } from 'gatsby';

function useBioQuery() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  const avatar = data.avatar.childImageSharp.gatsbyImageData;

  return { author, social, avatar };
}

export default useBioQuery;
