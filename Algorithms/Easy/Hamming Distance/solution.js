// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// The Hamming distance between two integers is the number of positions
// at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.

// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// --------------------------------------------------------

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let bitXOR = x ^ y;
  let bitToString = bitXOR.toString(2);
  let stringToArr = bitToString.split("");
  let removeLeadingZeros = stringToArr.filter(x => x === "1");
  let len = removeLeadingZeros.length;
  return len;
};

// OR

var hammingDistance = function(x, y) {
  return (x ^ y)
    .toString(2)
    .split("")
    .filter(x => x === "1").length;
};
