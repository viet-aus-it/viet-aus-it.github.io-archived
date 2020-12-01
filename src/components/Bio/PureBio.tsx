import Image from 'gatsby-image';
import { rhythm } from '../../utils/typography';

interface BioProps {
  author: Author;
  social: SocialLink;
  avatar: FixedImageProps;
}

function PureBio({ author, social, avatar }: BioProps) {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={avatar}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
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
