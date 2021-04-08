import { uniqBy } from 'lodash';

export default function getUniquePostsBySlug(
  contentfulPosts: ContentfulPost[]
) {
  return uniqBy(contentfulPosts, (node) => node.slug);
}
