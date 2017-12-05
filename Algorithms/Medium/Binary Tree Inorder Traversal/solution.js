// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:
// Given binary tree [1,null,2,3],
// 1
//   \
//     2
//   /
// 3

// return [1,3,2].

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
var inorderTraversal = function(root) {
  if (root === null) return [];
  if (root.length === 0) return root;

  const stack = [],
    arr = [];

  while (root !== null || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    arr.push(root.val);
    root = root.right;
  }

  return arr;
};
