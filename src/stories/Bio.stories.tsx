import React from 'react';
import PureBio from '../components/Bio/PureBio';
import { rhythm } from '../utils/typography';

export default {
  title: 'Bio',
  component: PureBio,
};

const author = {
  name: 'Viet-Aus-IT',
  summary: 'A group of IT Geeks',
};
const social = { github: 'viet-aus-it' };
const avatar = {
  base64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACbElEQVQ4y6VVW08TURDe/4qgVRQvCeID/gWNvpgYNcQnrAqC0aBGwUARYuKDIAKyF9i2sHvaPXvpBYkZZ+ac3XZrIQYeJtnM5Zs5M/PNGmEYQhQnEDUOtbQhiiIgPduSJsSpLWl19OjDvqhnO2KQ3qAP6bkgtksgfi2D2FmBsC5UQBRD3d0Af3sJpQS13e9ajwllHYT5lWPIHuzbDGpQBnI2nw2B9bwA9vR1NFpobHB1ldIjtA2y3Z2/q15DRYgKOK9vgVW8AObkIHjrcxA3fxNgm7NYL4bBenkFnNlRDZgowOXHHETJ3IV7So+VS1GF3TfjGHMZbRfB+/EeAQ9VhQrwkgKcGc1VWF19CvbUVaz8GpQXH+gKFaCTARaOB7RTwKTBTaanBfsm66TvQjrEUwA2MVhmT2fRkzwDYKhFagnPDpiuSbYupwKsmup5MsiBcoWoo2/pl/8PkKZMznHrj2KC7luHUW0MPIIwqOHa3FbrdmKFr26wUeysgr+1mDGAdw8ZRawgNvk/53FnxzimB7CdAfK+TY0ocMxsTp5jBhCHqacExoyiqth/hPezf4XFgspGPaFK0dksnkfHD0wpOgBUGdOTknb5UhJv/V0X9dCROEy0o6GQOLM3uWJv7S32S+DB8MHf/Jz5Ob1+Gx85qcHTw+tCq5IXE3u2B5UvE3gExvgQEPWCA6e/b93jPhtqLeIOG7pYEbeOEPCJ6hseiPLCfX37GkzNnD9iqHuYHVOZZwbtG12bpYc4nAEekPvpjl4j+a+/3lejlwm5a43BNfsb9nGOp02rlFbSj0XHAuZohivDU0ZJfwEnxfwFd0mIytdl8/EAAAAASUVORK5CYII=',
  height: 50,
  src: '/static/15bedc08e38e45f354967dc7a3797c7f/8ba1e/avatar.png',
  srcSet:
    '/static/15bedc08e38e45f354967dc7a3797c7f/8ba1e/avatar.png 1x,↵/static/15bedc08e38e45f354967dc7a3797c7f/f937a/avatar.png 1.5x, /static/15bedc08e38e45f354967dc7a3797c7f/71eb7/avatar.png 2x',
  width: 50,
};

export const TestBio = () => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <PureBio author={author} social={social} avatar={avatar} />
  </div>
);
