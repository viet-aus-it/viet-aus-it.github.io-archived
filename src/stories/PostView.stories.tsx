import RenderLayout from '../components/Template/Layout/RenderLayout';
import PostView from '../components/Template/PostView';

export default {
  title: 'Post View',
  component: PostView,
};

const postNode = {
  fields: {
    slug: 'Test Post',
  },
  frontmatter: {
    title: 'Test Post',
    date: '27/04/2020',
    description: '<p>This is just a test post</p>',
  },
  except: '<p>This is just a test post</p>',
};

export const TestPost = () => (
  <RenderLayout>
    <main>
      <PostView node={postNode} />
    </main>
  </RenderLayout>
);
