const path = require(`path`);
const { uniqBy } = require(`lodash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/BlogPost.tsx`);
  const result = await graphql(`
    query ContentfulBlogPosts {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const contentfulPosts = result.data.allContentfulBlogPost.edges;
  const posts = uniqBy(contentfulPosts, ({ node }) => node.slug);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
