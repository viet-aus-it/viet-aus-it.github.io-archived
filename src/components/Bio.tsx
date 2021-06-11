import { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rhythm } from '../utils/typography';
import getSocialLink from '../utils/getSocialLink';
import { useBioQuery } from '../hooks';

const Bio: FC = () => {
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
        {` - ${author.summary}. Follow us on `}
        <a href={getSocialLink('github', social.github)}>GitHub</a>
        {`, `}
        <a href={getSocialLink('discord', social.discord)}>Discord</a>
        {`, our Facebook `}
        <a href={getSocialLink('facebookGroup', social.facebookGroup)}>group</a>
        {` and `}
        <a href={getSocialLink('facebookPage', social.facebookPage)}>page</a>.
      </p>
    </div>
  );
};

export default Bio;
