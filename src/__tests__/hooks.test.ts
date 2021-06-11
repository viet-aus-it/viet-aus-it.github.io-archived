import { useStaticQuery } from 'gatsby';
import { useBioQuery, useBlogPosts, useSEOQuery } from '../hooks';

jest.mock('gatsby');

const mockUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>;

describe('Use Bio Query', () => {
  it('Should return Bio data', () => {
    const queryResult = {
      avatar: {
        childImageSharp: {
          gatsbyImageData: {
            height: 500,
            width: 500,
            layout: 'fixed',
            backgroundColor: '#ffffff',
            images: {
              fallback: {
                src: '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png',
                srcSet:
                  '/static/15bedc08e38e45f354967dc7a3797c7f/c8e32/avatar.png 420w',
                sizes: '420px',
              },
              sources: [
                {
                  srcSet:
                    '/static/15bedc08e38e45f354967dc7a3797c7f/c0c96/avatar.webp 420w',
                  type: 'image/webp',
                  sizes: '420px',
                },
              ],
            },
          },
        },
      },
      site: {
        siteMetadata: {
          author: {
            name: 'Test',
            summary: 'Test',
          },
        },
        social: {
          github: 'testGithub',
          discord: 'testDiscord',
          facebookPage: 'testFacebookPage',
          facebookGroup: 'testFacebookGroup',
        },
      },
    };

    mockUseStaticQuery.mockReturnValueOnce(queryResult);

    const result = {
      avatar: queryResult.avatar.childImageSharp.gatsbyImageData,
      author: queryResult.site.siteMetadata.author,
      social: queryResult.site.siteMetadata.social,
    };
    const output = useBioQuery();
    expect(output).toEqual(result);
  });
});

describe('Use SEO Query', () => {
  it('Should return SEO Data', () => {
    const queryResult = {
      site: {
        siteMetadata: {
          title: 'testTitle',
          description: 'testDescription',
        },
      },
    };
    mockUseStaticQuery.mockReturnValueOnce(queryResult);

    expect(useSEOQuery()).toEqual(queryResult.site.siteMetadata);
  });
});

describe('Use Contentful Blog Post Query', () => {
  it('Should get contentful blog posts', () => {
    const queryResult = {
      allContentfulBlogPost: {
        nodes: [
          {
            title: 'Test Title',
            slug: 'test-slug',
            publishDate: '2021-04-11T15:00+10:00',
            description: {
              childMarkdownRemark: {
                html: 'Test Description',
              },
            },
            body: {
              childMarkdownRemark: {
                excerpt: 'Test Body',
              },
            },
          },
        ],
      },
    };
    mockUseStaticQuery.mockReturnValueOnce(queryResult);

    expect(useBlogPosts()).toEqual(queryResult.allContentfulBlogPost.nodes);
  });
});
