import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('should render without crashing', () => {
    const treeRootPath = render(<Header isRootPath title="Viet-Aus-IT Blog" />);
    expect(treeRootPath).toMatchSnapshot();

    const treeNotRoot = render(
      <Header isRootPath={false} title="Viet-Aus-IT Blog" />
    );
    expect(treeNotRoot).toMatchSnapshot();
  });
});
