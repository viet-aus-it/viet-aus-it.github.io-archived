import { render } from '@testing-library/react';
import PostView from '../components/Template/PostView';

describe('Post View', () => {
  it('should render "proper" post nodes', () => {
    const fullNode = {
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

    const tree = render(<PostView node={fullNode} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render post nodes with missing frontmatter details', () => {
    const withoutFrontmatterTitle = {
      fields: {
        slug: 'Test Post',
      },
      frontmatter: {
        date: '27/04/2020',
        description: '<p>This is just a test post</p>',
      },
      except: '<p>This is just a test post</p>',
    };
    const tree2 = render(<PostView node={withoutFrontmatterTitle} />);
    expect(tree2).toMatchSnapshot();

    const withoutFrontmatterDesc = {
      fields: {
        slug: 'Test Post',
      },
      frontmatter: {
        title: 'Test Post',
        date: '27/04/2020',
      },
      except: '<p>This is just a test post</p>',
    };
    const tree3 = render(<PostView node={withoutFrontmatterDesc} />);
    expect(tree3).toMatchSnapshot();

    const withoutFrontmatterTitleAndDesc = {
      fields: {
        slug: 'Test Post',
      },
      frontmatter: {
        date: '27/04/2020',
      },
      except: '<p>This is just a test post</p>',
    };
    const tree4 = render(<PostView node={withoutFrontmatterTitleAndDesc} />);
    expect(tree4).toMatchSnapshot();
  });
});
