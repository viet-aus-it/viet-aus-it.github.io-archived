import { FC } from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import formatPublishedDate from '../utils/formatPublishedDate';

interface PostViewProp {
  node: ContentfulPost;
}

const PostView: FC<PostViewProp> = ({ node }) => {
  const { title, description } = node;
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
      <section
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html || '<p></p>',
        }}
      />
    </article>
  );
};

export default PostView;
