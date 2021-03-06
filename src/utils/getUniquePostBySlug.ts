import { uniqBy } from 'lodash';

export default function getUniquePostsBySlug(
  contentfulPosts: [{ node: ContentfulPost }]
) {
  return uniqBy(contentfulPosts, ({ node }) => node.slug);
}
