/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Template/Header';

describe('Header', () => {
  it('should render without crashing', () => {
    const treeRootPath = renderer
      .create(<Header isRootPath title="Viet-Aus-IT Blog" />)
      .toJSON();
    expect(treeRootPath).toMatchSnapshot();

    const treeNotRoot = renderer
      .create(<Header isRootPath={false} title="Viet-Aus-IT Blog" />)
      .toJSON();
    expect(treeNotRoot).toMatchSnapshot();
  });
});
