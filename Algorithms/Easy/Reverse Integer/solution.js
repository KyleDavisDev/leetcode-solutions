// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Reverse digits of an integer.
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

// Example:
// x = 123, return 321
// x = -123, return -321

// --------------------------------------------------------

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) {
    return 0;
  }
  let num = 0;
  while (x !== 0) {
    num = num * 10 + x % 10;
    x = parseInt(x / 10);
    if (num > 2147483648 || num < -2147483648) {
      return 0;
    }
  }
  return num;
};
