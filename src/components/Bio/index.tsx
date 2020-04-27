import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PureBio from './PureBio';

function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
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
  const avatar = data.avatar.childImageSharp.fixed;

  return <PureBio author={author} social={social} avatar={avatar} />;
}

export default Bio;
