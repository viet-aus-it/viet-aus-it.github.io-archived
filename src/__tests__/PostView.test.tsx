import { render } from '@testing-library/react';
import { PostView } from '../components';

describe('Post View', () => {
  const author: ContentfulAuthor = {
    name: 'author name',
    title: 'author title',
    company: 'author company',
    shortBio: {
      shortBio: 'short bio',
      childMarkdownRemark: {
        html: 'body html',
      },
    },
    github: 'github',
    facebook: 'facebook',
    image: {
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                '//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=750&h=500&q=50&fm=webp 750w,\n//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=1500&h=1000&q=50&fm=webp 1500w,\n//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=3000&h=2000&q=50&fm=webp 3000w',
              sizes: '(min-width: 3000px) 3000px, 100vw',
              type: 'image/webp',
            },
          ],
          fallback: {
            src:
              '//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=3000&h=2000&fl=progressive&q=50&fm=jpg',
            srcSet:
              '//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=750&h=500&fl=progressive&q=50&fm=jpg 750w,\n//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=1500&h=1000&fl=progressive&q=50&fm=jpg 1500w,\n//images.ctfassets.net/yy5lveaxjicl/7orLdboQQowIUs22KAW4U/8062cc92daeecfeb308f317f7f7d3dd9/matt-palmer-254999.jpg?w=3000&h=2000&fl=progressive&q=50&fm=jpg 3000w',
            sizes: '(min-width: 3000px) 3000px, 100vw',
          },
        },
        layout: 'constrained',
        width: 3000,
        height: 2000,
      },
    },
  };
  const image: GatsbyImageData = {
    images: {
      sources: [
        {
          srcSet:
            '//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=157&h=99&q=50&fm=webp 157w,\n//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=314&h=198&q=50&fm=webp 314w,\n//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=628&h=396&q=50&fm=webp 628w',
          sizes: '(min-width: 628px) 628px, 100vw',
          type: 'image/webp',
        },
      ],
      fallback: {
        src:
          '//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=628&h=396&q=50&fm=png',
        srcSet:
          '//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=157&h=99&q=50&fm=png 157w,\n//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=314&h=198&q=50&fm=png 314w,\n//images.ctfassets.net/yy5lveaxjicl/5wc4kuJb2nL14aLQsr0tNk/ba395bd96a73b832eb2ac6a1a02f170f/image.png?w=628&h=396&q=50&fm=png 628w',
        sizes: '(min-width: 628px) 628px, 100vw',
      },
    },
    layout: 'constrained',
    width: 628,
    height: 396,
  };

  it('should render "proper" post nodes', () => {
    const fullNode = {
      title: 'Test Post',
      slug: 'Test Post',
      publishDate: '2021-04-11T15:00+10:00',
      description: {
        description: 'Test Description',
        childMarkdownRemark: {
          excerpt: 'Test Description',
          html: '<p>Test Description</p>',
        },
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

    const tree = render(<PostView node={fullNode} />);
    expect(tree).toMatchSnapshot();
  });

  it('Should render missing description html', () => {
    const fullNode = {
      title: 'Test Post',
      slug: 'Test Post',
      publishDate: '2021-04-11T15:00+10:00',
      description: {
        description: 'Test Description',
        childMarkdownRemark: {},
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

    const tree = render(<PostView node={fullNode} />);
    expect(tree).toMatchSnapshot();
  });
});
