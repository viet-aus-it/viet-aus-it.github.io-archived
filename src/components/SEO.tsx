import { Helmet } from 'react-helmet';
import { useSEOQuery } from '../hooks';

interface MetaProp {
  name?: string;
  content?: string;
  property?: string;
}

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<MetaProp> | MetaProp;
}

function SEO({ title, description, lang, meta }: SEOProps) {
  const defaultFallback = useSEOQuery();
  const siteTitle = defaultFallback.title;
  const metaDescription = description || defaultFallback.description;
  const defaultMeta: Array<MetaProp> = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `viewport`,
      content: 'width=device-width, initial-scale=1',
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

  const helmetMeta = meta ? defaultMeta.concat(meta) : defaultMeta;

  return (
    <Helmet
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${defaultFallback.title}`}
    >
      <html lang={lang} />
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {helmetMeta.map(({ name, property, content }) => (
        <meta
          key={name || property}
          name={name && name}
          property={property && property}
          content={content}
        />
      ))}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
