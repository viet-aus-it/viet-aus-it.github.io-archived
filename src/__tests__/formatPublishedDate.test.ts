import formatPublishedDate from '../utils/formatPublishedDate';

describe('Format published date', () => {
  it('Should properly format the date', () => {
    const dateString = '2021-04-11T15:00+10:00';
    const output = formatPublishedDate(dateString);
    const expected = 'Apr 11, 2021';
    expect(output).toEqual(expected);
  });
});
