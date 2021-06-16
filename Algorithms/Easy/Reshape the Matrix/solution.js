// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example:
// Input:
// nums =
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// Output:
// [[1,2,3,4]]
// Explanation:
// The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

// Input:
// nums =
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// Output:
// [[1,2],
//  [3,4]]
// Explanation:
// There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

// Note:
// The height and width of the given matrix is in range [1, 100].
// The given r and c are all positive.

// --------------------------------------------------------

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  // Grab the parameters of the original matrix
  const row = nums.length,
    col = nums[0].length;

  // Check to see if conversion to the new matrix is even possible
  if (row * col !== r * c) return nums;

  // New matrix
  const arr = [];

  // Loop through all rows of orig matrix
  for (let i = 0; i < row; i++) {
    // Loop through all cols of orig matrix
    for (let j = 0; j < col; j++) {
      // Determine which row we should be in for the new matrix based on how far we are, currently, inside the orig matrix compared to the size of each row in new matrix
      let arrRow = Math.floor((i * col + j) / c);

      // Create a new row inside of the new matrix if need be
      if (!arr[arrRow]) arr.push([]);

      // Push col element into new matrix
      arr[arrRow].push(nums[i][j]);
    }
  }

  // Return newly-shaped matrix
  return arr;
};
