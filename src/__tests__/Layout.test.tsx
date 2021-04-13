/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { Layout } from '../components';

describe('Layout component', () => {
  const title = 'Test Page';
  const children = <p>This is a test element</p>;

  it('Should render root path component', () => {
    const tree = render(
      <Layout title={title} location={{ pathname: '' }}>
        {children}
      </Layout>
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should render other pages', () => {
    const tree = render(
      <Layout title={title} location={{ pathname: 'test-page' }}>
        {children}
      </Layout>
    );
    expect(tree).toMatchSnapshot();
  });
});
