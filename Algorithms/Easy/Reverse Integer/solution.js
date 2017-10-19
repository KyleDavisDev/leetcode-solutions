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
  //check if 0 immediately so we can skip algorithm
  if (x === 0) {
    return 0;
  }

  //going to construct num digit by digit from x
  //each loop
  let num = 0;
  while (x !== 0) {
    //move digits in num over a place and add most-right digit from x onto it.
    num = num * 10 + x % 10;

    //reduce x by 10, effectively dropping most-right digit.
    //parseInt to handle negative digits. EX: parseInt(-123/10) === parseInt(-12.3) === -12
    //if we tried Math.floor instead, Math.floor(-123/10) === Math.floor(-12.3) === -13
    x = parseInt(x / 10);

    //check if reversed integer would overflow or not.
    if (num > 2147483648 || num < -2147483648) {
      return 0;
    }
  }
  return num;
};
