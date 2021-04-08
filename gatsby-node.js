const path = require(`path`);
const { uniqBy } = require(`lodash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/components/BlogPost.tsx`);
  const result = await graphql(`
    query ContentfulBlogPosts {
      allContentfulBlogPost(
        sort: { fields: [publishDate], order: DESC }
        filter: { node_locale: { eq: "en-AU" } }
      ) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const contentfulPosts = result.data.allContentfulBlogPost.nodes;
  const posts = uniqBy(contentfulPosts, (node) => node.slug);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.slug,
      component: blogPost,
      context: {
        slug: post.slug,
        previous,
        next,
      },
    });
  });
};
