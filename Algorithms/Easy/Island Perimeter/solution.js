// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16

// --------------------------------------------------------

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let sum = 0;

  for (let i = 0, len1 = grid.length; i < len1; i++) {
    for (let j = 0, len2 = grid[0].length; j < len2; j++) {
      if (grid[i][j] === 1) {
        //left
        if (i > 0) {
          if (grid[i - 1][j] === 0) {
            sum++;
          }
        } else {
          sum++;
        }

        //right
        if (i < len1 - 1) {
          if (grid[i + 1][j] === 0) {
            sum++;
          }
        } else {
          sum++;
        }

        //top
        if (j > 0) {
          if (grid[i][j - 1] === 0) {
            sum++;
          }
        } else {
          sum++;
        }

        //bottom
        if (j < len2 - 1) {
          if (grid[i][j + 1] === 0) {
            sum++;
          }
        } else {
          sum++;
        }
      }
    }
  }

  return sum;
};
