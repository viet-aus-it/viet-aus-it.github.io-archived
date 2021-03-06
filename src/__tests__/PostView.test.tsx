import { render } from '@testing-library/react';
import PostView from '../components/Template/PostView';

describe('Post View', () => {
  it('should render "proper" post nodes', () => {
    const fullNode = {
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
    };

    const tree = render(<PostView node={fullNode} />);
    expect(tree).toMatchSnapshot();
  });
});
