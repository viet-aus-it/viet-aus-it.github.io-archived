import { FC } from 'react';
import { useSEOQuery, useBlogPosts } from '../hooks';
import { Bio, Layout, SEO, PostView } from '../components';
import getUniquePostsBySlug from '../utils/getUniquePostBySlug';

const BlogIndex: FC<PagePropsType> = ({ location }) => {
  const { title } = useSEOQuery();
  const contentfulPosts = useBlogPosts();
  const posts = getUniquePostsBySlug(contentfulPosts);

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      <Bio />
      {posts.map((node) => node && <PostView node={node} key={node.slug} />)}
    </Layout>
  );
};

export default BlogIndex;
