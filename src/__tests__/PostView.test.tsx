import React from 'react';
import renderer from 'react-test-renderer';
import PostView from '../components/Template/PostView';

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

describe('Post View', () => {
  it('should render without crashing', () => {
    const tree = renderer.create(<PostView node={postNode} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
