/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';

describe('App', () => {
  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;

    global.fetch.mockClear();
    delete global.fetch;

    window.scrollTo.mockClear();
  });
});
