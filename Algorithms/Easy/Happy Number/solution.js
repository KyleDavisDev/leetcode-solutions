// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// --------------------------------------------------------

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  const set = new Set();
  set.add(n);

  while (n !== 1) {
    n = squareSum(n);

    if (set.has(n)) return false;
    else set.add(n);
  }
  return true;
};
const dict = {
  1: 1,
  2: 4,
  3: 9,
  4: 16,
  5: 25,
  6: 36,
  7: 49,
  8: 64,
  9: 81,
  0: 0
};
const squareSum = n => {
  let sum = 0,
    digit;
  while (n > 0) {
    digit = n % 10;
    sum = sum + dict[digit];
    n = (n - digit) / 10;
  }
  return sum;
};
