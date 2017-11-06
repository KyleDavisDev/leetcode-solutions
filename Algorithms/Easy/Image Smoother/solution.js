// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a 2D integer matrix M representing the gray scale of an image, you need to
// design a smoother to make the gray scale of each cell becomes the average gray
// scale (rounding down) of all the 8 surrounding cells and itself. If a cell has
// less than 8 surrounding cells, then use as many as you can.

// Example:
// Input:
// [[1,1,1],
// [1,0,1],
// [1,1,1]]
// Output:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0

// --------------------------------------------------------

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const smoothArr = [];

  for (let i = 0, len = M.length; i < len; i++) {
    smoothArr[i] = [];

    for (let j = 0, length = M[i].length; j < length; j++) {
      let nums = 0;
      let count = 0;

      if (i - 1 >= 0 && j - 1 >= 0) {
        nums += M[i - 1][j - 1];
        count++;
      }
      if (i - 1 >= 0) {
        nums += M[i - 1][j];
        count++;
      }
      if (i - 1 >= 0 && j + 1 < length) {
        nums += M[i - 1][j + 1];
        count++;
      }
      if (j - 1 >= 0) {
        nums += M[i][j - 1];
        count++;
      }

      nums += M[i][j];
      count++;

      if (j + 1 < length) {
        nums += M[i][j + 1];
        count++;
      }
      if (i + 1 < len && j - 1 >= 0) {
        nums += M[i + 1][j - 1];
        count++;
      }
      if (i + 1 < len) {
        nums += M[i + 1][j];
        count++;
      }
      if (i + 1 < len && j + 1 < length) {
        nums += M[i + 1][j + 1];
        count++;
      }

      smoothArr[i][j] = Math.floor(nums / count);
    }
  }

  return smoothArr;
};
