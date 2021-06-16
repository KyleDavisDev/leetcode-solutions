// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
 * @description Going from bottom to top, prograte the minimum sum all the way to the top. Once the propagation is complete, grab top element.
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  // Simple gate clause
  if (triangle.length === 1) {
    return triangle[0][0];
  }

  // Start from second-to-last row.
  for (let i = triangle.length - 2; i > -1; i--) {
    // Start from left and go to end.
    for (let j = 0, len = triangle[i].length; j < len; j++) {
      // Relace spot in triangle with the minimum sum of the two possibile adjacent numbers
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // Return minimum-propogated number
  return triangle[0][0];
};
