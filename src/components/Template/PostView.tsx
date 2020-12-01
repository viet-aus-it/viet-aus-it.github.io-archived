/* eslint-disable react/no-danger */

import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';

function PostView({ node }: { node: Post }) {
  const title = node.frontmatter.title || node.fields.slug;

  const postContent = node.frontmatter.description || node.excerpt || '';
  return (
    <article key={node.fields.slug}>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
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
