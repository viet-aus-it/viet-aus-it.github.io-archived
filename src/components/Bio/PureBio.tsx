import { GatsbyImage } from 'gatsby-plugin-image';
import { rhythm } from '../../utils/typography';

interface BioProps {
  author: Author;
  social: SocialLink;
  avatar: GatsbyImageData;
}

function PureBio({ author, social, avatar }: BioProps) {
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
          width: 50,
          height: 50,
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
        {` ${author.summary} `}
        <a href={`https://github.com/${social.github}`}>
          We&apos;re on GitHub.
        </a>
      </p>
    </div>
  );
}

export default PureBio;
