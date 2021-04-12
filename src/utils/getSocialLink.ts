export default function getSocialLink(key: string, url: string) {
  if (url.includes('http://') || url.includes('https://')) {
    return url;
  }

  switch (key) {
    case 'github':
      return `https://github.com/${url}`;

    case 'discord':
      return `https://discord.gg/${url}`;

    case 'facebookPage':
      return `https://facebook.com/${url}`;

    case 'facebookGroup':
      return `https://facebook.com/group/${url}`;

    default:
      return url;
  }
}
