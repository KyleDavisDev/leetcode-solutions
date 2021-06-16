// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = function(root) {
  if (!root) return 0;

  let maxDepth = 0;

  (function DFS(node, index) {
    if (node === null) return null;
    else {
      maxDepth = maxDepth > index ? maxDepth : index;
      DFS(node.left, index + 1);
      DFS(node.right, index + 1);
    }
  })(root, 1);

  return maxDepth;
};
