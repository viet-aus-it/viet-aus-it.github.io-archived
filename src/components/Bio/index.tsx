import { useStaticQuery, graphql } from 'gatsby';
import PureBio from './PureBio';

function Bio() {
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

  return <PureBio author={author} social={social} avatar={avatar} />;
}

export default Bio;
