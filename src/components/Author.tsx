/* eslint-disable react/no-danger */
import { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rhythm } from '../utils/typography';

interface AuthorProps {
  author: ContentfulAuthor;
}

const Author: FC<AuthorProps> = ({ author }) => {
  const avatar = author.image.gatsbyImageData;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <GatsbyImage
        image={{
          ...avatar,
          layout: 'fixed',
          width: 150,
          height: 150,
        }}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
      />
      <p>
        {`Written by `}
        <strong>{author.name}</strong>
        <span
          dangerouslySetInnerHTML={{
            __html: author.shortBio.childMarkdownRemark.html,
          }}
        />
      </p>
    </div>
  );
};

export default Author;
