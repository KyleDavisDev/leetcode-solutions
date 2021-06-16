// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  //seee if we even need to go through algo or not.
  if (matrix.length === 0) return [];
  //keep track of current row and column
  let r = c = 0;
  //get the lengths of the input matrix and init our results array
  const m = matrix.length,
    n = matrix[0].length,
    result = [];

  //loop through the total number of matrix elements (m*n)
  for (let i = 0, len = m * n; i < len; i++) {
    //push value to matrix
    result.push(matrix[r][c]);

    //interesting property of this traversal question is that when we are going "up", the current r and c are evenly divisible by 2.
    if ((r + c) % 2 === 0) { //going up
      if (c === n - 1) { r++; } //right edge + corner (if exists)
      else if (r === 0) { c++; } //top edge
      else { r--; c++; } //keep going
    } else { //going down
      if (r === m - 1) { c++; } //bottom edge + coern (if exists)
      else if (c === 0) { r++; } //left edge
      else { r++; c--; } //keep going
    }
  }

  return result;
};
