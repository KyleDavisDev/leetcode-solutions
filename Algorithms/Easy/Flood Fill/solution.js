// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
// At the end, return the modified image.

// Example:
// Input:
// image = [
//  [1,1,1],
//  [1,1,0],
//  [1,0,1]
// ]
// sr = 1, sc = 1, newColor = 2
// Output: [
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
// ]
// Explanation:
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.

// Note:
// The length of image and image[0] will be in the range [1, 50].
// The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

// --------------------------------------------------------

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//This function is a recursive and uses DFS concept
var floodFill = function(image, sr, sc, newColor) {
  //check if the specific spot is already the color we are trying to turn it into
  //this check will save us a ton of efficiency by not going down "paths" that we have already been down
  if (image[sr][sc] === newColor) return image;

  //get current color of spot and change the current color to desired color
  const color = image[sr][sc];
  image[sr][sc] = newColor;

  //check if we can move "up" or else make -1 so image[up] will be invalid
  const up = sr > 0 ? sr - 1 : -1;
  //check if image[up] exists and is the same color as our original
  if (image[up] !== undefined && image[up][sc] === color) {
    //recursive call function with new parameters
    floodFill(image, up, sc, newColor);
  }

  //check if we can move "left" or else make -1 so image[sr][left] will be invalid
  const left = sc > 0 ? sc - 1 : -1;
  //check if image[sr][left] exists and is the same color as our original
  if (image[sr][left] !== undefined && image[sr][left] === color) {
    //recursive call function with new parameters
    floodFill(image, sr, left, newColor);
  }

  //check if we can move "down" or else make -1 so image[down] will be invalid
  const down = sr < image.length - 1 ? sr + 1 : -1;
  //check if image[down] exists and is the same color as our original
  if (image[down] !== undefined && image[down][sc] === color) {
    //recursive call function with new parameters
    floodFill(image, down, sc, newColor);
  }

  //check if we can move "right" or else make -1 so image[sr][right] will be invalid
  const right = sc < image[0].length - 1 ? sc + 1 : -1;
  //check if image[sr][right] exists and is the same color as our original
  if (image[sr][right] !== undefined && image[sr][right] === color) {
    //recursive call function with new parameters
    floodFill(image, sr, right, newColor);
  }

  return image;
};
