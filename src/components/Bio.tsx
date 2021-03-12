import { GatsbyImage } from 'gatsby-plugin-image';
import { rhythm } from '../utils/typography';
import useBioQuery from '../hooks/useBioQuery';

function Bio() {
  const { author, social, avatar } = useBioQuery();

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
        {`A blog by `}
        <strong>{author.name}</strong>
        {` - ${author.summary}. We're on `}
        <a href={`https://github.com/${social.github}`}>GitHub</a>
        {`, `}
        <a href={`https://discord.gg/${social.discord}`}>Discord</a>
        {`. Our Facebook `}
        <a href={`https://discord.gg/${social.facebookGroup}`}>group</a>
        {` and `}
        <a href={`https://discord.gg/${social.facebookPage}`}>page</a>.
      </p>
    </div>
  );
}

export default Bio;
