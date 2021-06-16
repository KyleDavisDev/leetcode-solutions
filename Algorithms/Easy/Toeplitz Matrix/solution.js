// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

// Example 1:
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: True
// Explanation:
// 1234
// 5123
// 9512
// In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.

// Example 2:
// Input: matrix = [[1,2],[2,2]]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.

// Note:
// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].

// --------------------------------------------------------

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
//We are going to check each integer with its i+1, j+1 counterpart going from left to right, top to bottom
//we can avoid checking the top right and bottom left values altogether since they will not have anything to compare against
var isToeplitzMatrix = function(matrix) {
  //start at first row, stop before the last element
  for (let i = 0, rows = matrix.length - 1; i < rows; i++) {
    //start at first column, stop before last element
    for (let j = 0, cols = matrix[i].length - 1; j < cols; j++) {
      //compare current location with the one to the bottom-right of it (i+1, j+1)
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
    }
  }
  return true;
};

//if the input was the same input as Example 1, stated above,
//and I were to put a console.log(matrix[i][j], matrix[i + 1][j + 1])
//inside of the second for loop, the output would be:
// 1 1
// 2 2
// 3 3
// 5 5
// 1 1
// 2 2
