import getSocialLink from '../utils/getSocialLink';

describe('Get Social Link', () => {
  describe('Link that contains https or http', () => {
    const testCases = ['http', 'https'];
    testCases.forEach((prefix) => {
      it(`Should return original link with ${prefix}`, () => {
        const url = `${prefix}://test.com`;
        const key = 'testURL';
        const result = getSocialLink(key, url);
        expect(result).toEqual(url);
      });
    });
  });

  describe('Should generate link for the rest', () => {
    const testCases = [
      {
        key: 'github',
        prefix: 'https://github.com/',
      },
      {
        key: 'discord',
        prefix: 'https://discord.gg/',
      },
      {
        key: 'facebookPage',
        prefix: 'https://facebook.com/',
      },
      {
        key: 'facebookGroup',
        prefix: 'https://facebook.com/group/',
      },
    ];
    testCases.forEach(({ key, prefix }) => {
      it(`Should generate ${key} link`, () => {
        const value = 'AAAA';
        const result = getSocialLink(key, value);
        const expected = `${prefix}${value}`;
        expect(result).toEqual(expected);
      });
    });

    it('Should return the original URL if matches nothing', () => {
      const url = 'test';
      const result = getSocialLink('aaaa', url);
      expect(result).toEqual(url);
    });
  });
});
