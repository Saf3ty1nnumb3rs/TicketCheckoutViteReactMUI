import mediaQuery from 'css-mediaquery';

/**
 * From: https://mui.com/material-ui/react-use-media-query/#testing
 *
 * You need an implementation of matchMedia in your test environment.
 * For instance, jsdom doesn't support it yet. You should polyfill it.
 * Using css-mediaquery to emulate it is recommended.
 *
 * Notes:
 *
 * For testing components that use the useMediaQuery hook, you need to pop this into your test.
 *
 * e.g.
 *
 *  describe('Component that has useMediaQuery in it', () => {
 *    mediaQueryTestHelper();
 *    it('should render correctly', () => {
 *      // Your test here
 *    })
 *  })
 *
 */

export function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, {
        width,
      }),
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
}

export const mediaQueryTestHelper = () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
};

export const setWindowWidth = (width) => {
  window.matchMedia = createMatchMedia(width);
};
