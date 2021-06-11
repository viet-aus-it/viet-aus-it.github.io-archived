import { useStaticQuery, graphql } from 'gatsby';

const useBioQuery = () => {
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
            discord
            facebookPage
            facebookGroup
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  const avatar = data.avatar.childImageSharp.gatsbyImageData;

  return { author, social, avatar };
};

export default useBioQuery;
