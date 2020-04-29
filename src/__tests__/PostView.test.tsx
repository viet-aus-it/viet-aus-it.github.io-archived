import React from 'react';
import renderer from 'react-test-renderer';
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

    const tree = renderer.create(<PostView node={fullNode} />).toJSON();
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
    const tree2 = renderer
      .create(<PostView node={withoutFrontmatterTitle} />)
      .toJSON();
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
    const tree3 = renderer
      .create(<PostView node={withoutFrontmatterDesc} />)
      .toJSON();
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
    const tree4 = renderer
      .create(<PostView node={withoutFrontmatterTitleAndDesc} />)
      .toJSON();
    expect(tree4).toMatchSnapshot();
  });
});
