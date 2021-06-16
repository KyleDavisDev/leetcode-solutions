// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// You need to find the largest value in each row of a binary tree.

// Example:
// Input:

//           1
//          / \
//         3   2
//        / \   \
//       5   3   9

// Output: [1, 3, 9]

// --------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  const arr = [];

  (function DFS(root, step) {
    if (!root) return;

    if (root.val > arr[step] || arr[step] === undefined) arr[step] = root.val;

    DFS(root.left, step + 1);

    DFS(root.right, step + 1);
  })(root, 0);

  return arr;
};
