// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.

// Example:
// Input: 16
// Returns: True

// Input: 16
// Returns: True

// --------------------------------------------------------

/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  let x = 2;
  while (x * x < num) {
    x++;
  }
  return x * x === num;
};
