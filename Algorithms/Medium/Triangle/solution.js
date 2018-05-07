// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// Example:
// Input:
// [
//   [2],
//  [3,4],
// [6,5,7],
// [4,1,8,3]
// ]
// Output: The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// --------------------------------------------------------

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  if (triangle.length === 1) {
    return triangle[0][0];
  }
  for (let i = triangle.length - 2; i > -1; i--) {
    for (let j = 0, len = triangle[i].length; j < len; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};