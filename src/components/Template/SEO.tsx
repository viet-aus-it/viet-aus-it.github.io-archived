import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaProp = { name?: string; content?: string; property?: string };

type SEOProps = {
  description?: string;
  lang?: string;
  title: string;
  meta: Array<MetaProp> | MetaProp;
};

function SEO({ description, meta, lang, title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              github
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultMeta: Array<MetaProp> = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;