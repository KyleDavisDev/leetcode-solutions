// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a positive integer, output its complement number. The
// complement strategy is to flip the bits of its binary
// representation.

// Note:
// The given integer is guaranteed to fit within the range of a
// 32-bit signed integer. You could assume no leading zero bit
// in the integer’s binary representation.

// Example:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101
// (no leading zero bits), and its complement is 010. So
// you need to output 2.

// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1
// (no leading zero bits), and its complement is 0. So
// you need to output 0.

// --------------------------------------------------------

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  //In following commments, num will be 5
  //1. convert num to binary via toString(2). I.e. 101
  //2. get length of string so we can know how many bits we need. I.e. 101.length => 3
  //3. want to convert all 3 of those bits to 1's so we raise 2 to the power of 3 which is 8. 8 in binary is 1000
  //4. by subtracting 1 from 8, the variable 'compare' goes from binary 1000 to 111.
  //5. compare 101 with 111 via XOR which tells us explicity which bits are turned on in ONLY one of the two numbers.
  //6. in this case, 101 ^ 111 results in binary 10 which is 2 in base 10.
  const compare = 2 ** num.toString(2).length - 1;
  return num ^ compare;
};
