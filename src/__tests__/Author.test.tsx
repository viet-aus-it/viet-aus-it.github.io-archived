import { render } from '@testing-library/react';
import Author from '../components/Template/Author';

describe('Author view', () => {
  it('Should render "proper" author node', () => {
    const author = {
      name: 'Vietnamese Aussies in IT',
      title: 'Non-profit Organization',
      company: 'VAIT',
      shortBio: {
        shortBio:
          "We're a group of IT Geeks in Australia.\n\nCome find us on [GitHub](https://github.com/viet-aus-it/), [Discord](https://discord.gg/waYhnk4NKy), Facebook [group](https://www.facebook.com/group/vietausit) and [page](https://www.facebook.com/vietausit).",
        childMarkdownRemark: {
          html:
            '<p>We’re a group of IT Geeks in Australia.</p>\n<p>Come find us on <a href="https://github.com/viet-aus-it/">GitHub</a>, <a href="https://discord.gg/waYhnk4NKy">Discord</a>, Facebook <a href="https://www.facebook.com/group/vietausit">group</a> and <a href="https://www.facebook.com/vietausit">page</a>.</p>',
        },
      },
      github: 'viet-aus-it',
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
          backgroundColor: '#FFF',
        },
      },
    };

    const tree = render(<Author author={author} />);
    expect(tree).toMatchSnapshot();
  });
});
