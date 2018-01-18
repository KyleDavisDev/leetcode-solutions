// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown at https://leetcode.com/static/images/problemset/diagonal_traverse.png



// Example:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output:  [1,2,4,7,5,3,6,8,9]

// --------------------------------------------------------

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let r = c = 0;
  const m = matrix.length,
    n = matrix[0].length,
    result = [];

  for (let i = 0, len = m * n; i < len; i++) {
    result.push(matrix[r][c]);

    if ((r + c) % 2 === 0) {
      if (c === n - 1) { r++; }
      else if (r === 0) { c++; }
      else { r--; c++; }
    } else {
      if (r === m - 1) { c++; }
      else if (c === 0) { r++; }
      else { r++; c--; }
    }
  }

  return result;
};