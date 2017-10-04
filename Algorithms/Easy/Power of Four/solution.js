// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// --------------------------------------------------------

/**
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function(num) {
  if (num < 1) {
    return false;
  }

  while (num >= 4) {
    if (num % 4 !== 0) {
      return false;
    }

    num /= 4;
  }
  return num === 1;
};
