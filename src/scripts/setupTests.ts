// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('jest-fetch-mock').enableMocks();

if (process.env.TEST_MODE === 'quiet') {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
  // eslint-disable-next-line no-console
  console.warn = jest.fn();
}

/*
  https://css-tricks.com/touch-devices-not-judged-size/

  MUI relies heavily on (pointer: fine) for media queries, it will render mobile
  versions of components if we do not match on pointer fine.
  Jest documentation:
  https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
*/
export default global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, func-names
  function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };

class ResizeObserverMock {
  observe = jest.fn();

  unobserve = jest.fn();

  disconnect = jest.fn();
}

window.ResizeObserver = ResizeObserverMock;
