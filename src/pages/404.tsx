import { useSEOQuery } from '../hooks';
import { Layout, SEO } from '../components';

function NotFoundPage({ location }: PagePropsType) {
  const { title } = useSEOQuery();

  return (
    <Layout location={location} title={title}>
      <SEO title={`${title} - 404: Not Found`} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export default NotFoundPage;
