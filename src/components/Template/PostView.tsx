/* eslint-disable react/no-danger */

import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';
import formatPublishedDate from '../../utils/formatPublishedDate';

function PostView({ node }: { node: ContentfulPost }) {
  const {
    title,
    description: { description },
  } = node;
  const postContent = description;
  const publishedDate = formatPublishedDate(node.publishDate);

  return (
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.slug}>
            {title}
          </Link>
        </h3>
        <small>{publishedDate}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: postContent,
          }}
        />
      </section>
    </article>
  );
}

export default PostView;
