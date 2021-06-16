// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a binary tree, find the leftmost value in the last row of the tree.

// Example:
// Input:
// Input:
//     2
//    / \
//   1   3
// Output:
// 1

// Input:
//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7
// Output:
// 7

// Note: You may assume the tree (i.e., the given root node) is not NULL.

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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if (root.left === null && root.right === null) {
    return root.val;
  }

  let val = root.val,
    curDepth = 0;

  (function DFS(root, depth) {
    if (root === null) return;

    if (root.left) {
      DFS(root.left, depth + 1);
    }

    if (depth > curDepth) {
      val = root.val;
      curDepth = depth;
    }

    if (root.right) {
      DFS(root.right, depth + 1);
    }
  })(root, 0);

  return val;
};
