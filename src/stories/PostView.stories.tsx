import RenderLayout from '../components/Template/Layout/RenderLayout';
import PostView from '../components/Template/PostView';

export default {
  title: 'Post View',
  component: PostView,
};

const author = {} as ContentfulAuthor;
const image = {} as GatsbyImageData;
const postNode = {
  title: 'Test Post',
  slug: 'Test Post',
  publishDate: '2020-04-27T12:00+11:00',
  description: {
    description: 'Test Description',
  },
  body: {
    childMarkdownRemark: {
      excerpt: '<p>This is just a test post</p>',
    },
  },
  author,
  heroImage: {
    gatsbyImageData: image,
  },
};

export const TestPost = () => (
  <RenderLayout>
    <main>
      <PostView node={postNode} />
    </main>
  </RenderLayout>
);
