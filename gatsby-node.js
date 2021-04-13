const path = require(`path`);
const { uniqBy } = require(`lodash`);

exports.createPages = async ({ graphql, actions }) => {
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
  const { createPage } = actions;
  const contentfulPosts = result.data.allContentfulBlogPost.nodes;
  const posts = uniqBy(contentfulPosts, (node) => node.slug);
  const blogPostTemplate = path.resolve(
    `./src/components/BlogPostTemplate.tsx`
  );

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.slug,
      component: blogPostTemplate,
      context: {
        slug: post.slug,
        previous,
        next,
      },
    });
  });
};
