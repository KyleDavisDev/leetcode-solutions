// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  // returns the base 10 number for where the input two numbers, compared to each other, have exactly one 1 in each bit
  // EX: 2 ^ 5 => 0010 ^ 0101 = 0111
  // In base 10, 0111 is 7.
  // So, bitXOR = 7
  let bitXOR = x ^ y;

  // convert base 10 num to binary
  // EX: 7.toString(2) is 0111
  // So, bitToString = 0111
  let bitToString = bitXOR.toString(2);

  // convert int to array by splitting by each charactor
  // 0111.split("") = ["0","1","1","1"]
  // So, stringToArr = ["0","1","1","1"]
  let stringToArr = bitToString.split("");

  // remove any element that is not a "1"
  // ["0","1","1","1"].filter(x => x === "1") = ["1","1","1"]
  // So, removeLeadingZeros = ["1","1","1"]
  let removeLeadingZeros = stringToArr.filter(x => x === "1");

  // find length of the array
  // ["1","1","1"].length = 3
  // So, len = 3
  let len = removeLeadingZeros.length;

  return len;
};

// OR

//this is same answer as above but chains the methods together
var hammingDistance = function(x, y) {
  return (x ^ y)
    .toString(2)
    .split("")
    .filter(x => x === "1").length;
};
