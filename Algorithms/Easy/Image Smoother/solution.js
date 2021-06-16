// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  //init array to hold "smoothed" values
  const smoothArr = [];

  //loop through M
  for (let i = 0, len = M.length; i < len; i++) {
    //init each index as array so we can set smootharr[i][j] values
    smoothArr[i] = [];

    //loop through M subarray
    for (let j = 0, length = M[i].length; j < length; j++) {
      //going to add values through each of the surround positions
      //and divide by the total number of positions added

      //reset/init values
      let nums = 0;
      let count = 0;

      //check if top left of the current position exists and add value
      if (i - 1 >= 0 && j - 1 >= 0) {
        nums += M[i - 1][j - 1];
        count++;
      }
      //check if top of current position exists and add value
      if (i - 1 >= 0) {
        nums += M[i - 1][j];
        count++;
      }
      //check if top right of current position exists and add value
      if (i - 1 >= 0 && j + 1 < length) {
        nums += M[i - 1][j + 1];
        count++;
      }
      //check if left of current position exists and add value
      if (j - 1 >= 0) {
        nums += M[i][j - 1];
        count++;
      }

      //check current position values
      nums += M[i][j];
      count++;

      //check if right of current position exists and add value
      if (j + 1 < length) {
        nums += M[i][j + 1];
        count++;
      }
      //check if bottom left of current position exists and add value
      if (i + 1 < len && j - 1 >= 0) {
        nums += M[i + 1][j - 1];
        count++;
      }
      //check if bottom of current position exists and add value
      if (i + 1 < len) {
        nums += M[i + 1][j];
        count++;
      }
      //check if bottom right of current position exists and add value
      if (i + 1 < len && j + 1 < length) {
        nums += M[i + 1][j + 1];
        count++;
      }

      //push floored average to smoothArr and move on
      smoothArr[i][j] = Math.floor(nums / count);
    }
  }

  return smoothArr;
};
