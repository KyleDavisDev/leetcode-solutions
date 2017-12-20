// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].

// --------------------------------------------------------

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const arr = [0];
  let offset = 1;
  for (let i = 1; i <= num; i++) {
    if (offset * 2 === i) {
      offset *= 2;
    }
    arr[i] = arr[i - offset] + 1;
  }

  return arr;
};


//OR a much slower, but more easily readable:

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i.toString(2).split('').filter(x => x === '1').length);
  }
  return arr;
};

