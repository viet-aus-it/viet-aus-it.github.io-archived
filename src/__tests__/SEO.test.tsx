import { render } from '@testing-library/react';
import { SEO } from '../components';
import { useSEOQuery } from '../hooks';

jest.mock('../hooks');

describe('SEO Component', () => {
  const mockUseSEOQuery = useSEOQuery as jest.MockedFunction<
    typeof useSEOQuery
  >;
  const defaultFallback = {
    name: 'fallback title',
    description: 'fallback description',
  };
  mockUseSEOQuery.mockReturnValue(defaultFallback);

  it('Should render with full props, and meta array', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const lang = 'en';
    const meta = [{ name: 'test', content: 'test' }];
    const tree = render(
      <SEO lang={lang} title={title} description={description} meta={meta} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render with full props, and meta object', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const lang = 'en';
    const meta = { name: 'test', content: 'test' };
    const tree = render(
      <SEO lang={lang} title={title} description={description} meta={meta} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render without lang', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const meta = { name: 'test', content: 'test' };
    const tree = render(
      <SEO title={title} description={description} meta={meta} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render without meta prop', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const lang = 'en';
    const tree = render(
      <SEO lang={lang} title={title} description={description} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render with undefined meta prop', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const lang = 'en';
    const meta = undefined;
    const tree = render(
      <SEO lang={lang} title={title} description={description} meta={meta} />
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render without description', () => {
    const title = 'Test Title';
    const lang = 'en';
    const meta = { name: 'test', content: 'test' };
    const tree = render(<SEO lang={lang} title={title} meta={meta} />);
    expect(tree).toMatchSnapshot();
  });
});
