// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Find the sum of all left leaves in a given binary tree.

// Example:
//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
var sumOfLeftLeaves = function(root) {
  if (root === null) return 0;

  let sum = 0;

  (function getLeft(node) {
    if (node === null) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    } else {
      getLeft(node.left);
    }

    if (node.right) {
      getLeft(node.right);
    }

    return;
  })(root);

  return sum;
};
