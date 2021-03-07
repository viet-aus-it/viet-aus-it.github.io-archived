import { useStaticQuery, graphql } from 'gatsby';
import type { SEOProps } from './RenderSEO';
import RenderSEO from './RenderSEO';

function SEO({ title, description, lang, meta }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <RenderSEO
      title={title}
      description={description}
      lang={lang}
      meta={meta}
      defaultFallback={site.siteMetadata}
    />
  );
}

export default SEO;
