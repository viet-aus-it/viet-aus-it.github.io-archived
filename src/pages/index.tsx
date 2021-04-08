import { useSEOQuery, useContentfulBlogPost } from '../hooks';
import { Bio, Layout, SEO, PostView } from '../components';
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
