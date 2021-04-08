import useSEOQuery from '../hooks/useSEOQuery';
import useContentfulBlogPost from '../hooks/useContentfulBlogPost';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostView from '../components/PostView';
import getUniquePostsBySlug from '../utils/getUniquePostBySlug';

function BlogIndex({ location }: PagePropsType) {
  const { title } = useSEOQuery();
  const contentfulPosts = useContentfulBlogPost();
  const posts = getUniquePostsBySlug(contentfulPosts);

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      <Bio />
      {posts.map((node) => node && <PostView node={node} key={node.slug} />)}
    </Layout>
  );
}

export default BlogIndex;
