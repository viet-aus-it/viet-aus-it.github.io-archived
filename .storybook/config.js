import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

configure(require.context('../src', true, /\.stories\.(js|tsx)$/), module);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
