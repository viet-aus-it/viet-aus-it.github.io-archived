import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

configure(require.context('../src', true, /\.stories\.(jsx?|tsx?)$/), module);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

/**
 * Temporary fix
 * @see: https://github.com/gatsbyjs/gatsby/issues/28253
 */
config.resolve.alias['$virtual/lazy-client-sync-requires'] = require.resolve(
  '../src/__mocks__/virtual-lazy-client-sync-requires'
);
