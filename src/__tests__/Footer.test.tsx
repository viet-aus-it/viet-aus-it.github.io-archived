import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('should render without crashing', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
