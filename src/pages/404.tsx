import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function NotFoundPage({ data, location }: PagePropsType) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`${siteTitle} - 404: Not Fount`} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
