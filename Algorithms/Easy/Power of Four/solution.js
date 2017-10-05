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
  //if num is negative, then we can say immediately that it is not a power of four.
  if (num < 1) {
    return false;
  }

  //reduce num so long as it is greater than four and evenly divisible by 4
  //if, at any point, num mod 4 is not zero, then num is not a power of four.
  while (num >= 4) {
    if (num % 4 !== 0) {
      return false;
    }
    num /= 4;
  }

  //return bool if (reduced) num is 1 or not
  return num === 1;
};
