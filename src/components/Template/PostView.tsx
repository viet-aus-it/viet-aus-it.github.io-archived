/* eslint-disable react/no-danger */

import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';

function PostView({ node, title }: { node: Post; title: string }) {
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
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  );
}

export default PostView;
