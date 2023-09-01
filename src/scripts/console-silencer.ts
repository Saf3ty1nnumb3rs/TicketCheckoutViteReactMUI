/* eslint-disable no-console */
/**
 * Greetings!!
 *
 * If you have a pesky error that just won't go away and that's caused by a third party that we can't fix
 * (we should fix deprecated and follow the errors if we can) but some are just out of our realm of control
 * you can add those messages down below and it will silence them for you.
 *
 * Please do not abuse this power. With great power comes great responsibility!
 *
 */
export {};
const errorsToSilence = [
  //   'A component is changing an uncontrolled input to be controlled',
  'An update to', // turned this off, I couldn't debug a test to save my life with this on.
  'MUI: Missing license key',

  //   'You seem to have overlapping act',
];
const originalError = console.error.bind(console.error);
console.error = (...args) => {
  const message = args.toString().toLowerCase();
  const hasErrorMessageHit = errorsToSilence.some((errorPiece) => {
    return message.includes(errorPiece.toLowerCase());
  });
  if (!hasErrorMessageHit) {
    // check the stack trace to see where this error came from.
    originalError(...args);
  }
};

const warningsToSilence = [''];
const originalWarning = console.warn.bind(console.warn);

console.warn = (...args) => {
  const message = args.toString().toLowerCase();
  const hasErrorMessageHit = warningsToSilence.some((errorPiece) => {
    return message.includes(errorPiece.toLowerCase());
  });
  if (!hasErrorMessageHit) {
    // check the stack trace to see where this error came from.
    originalWarning(...args);
  }
};
