// Author: Kyle Bonar
// Github: github.com/KyleBonar

// // Description:
// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example:
// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example:
// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// Note:
// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

// --------------------------------------------------------

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  // map over each row
  return A.map(row => {
    // First, reverse each row, then map over each individual item item
    return row.reverse().map(val => {
      // 'Invert' each value
      return val === 1 ? 0 : 1;
    });
  });
};

// OR possibly faster solution by combining the reverse() and .map into one:

const flipAndInvertImage = A => {
  // Map over each row
  return A.map(row => {
    // Init new array to push into
    const res = [];
    // Get the length of each row (Maybe this is same for each row, not sure...)
    const len = row.length - 1;
    // Loop through row
    row.forEach((val, ind, arr) => {
      // Push reversed val and, at the same time, invert the value
      res.push(arr[len - ind] === 1 ? 0 : 1);
    });
    // Return the result array
    return res;
  });
};
