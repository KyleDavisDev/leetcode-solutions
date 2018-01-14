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

//For this solution, we will create a depth-first search through the tree and store values as we go along.
var inorderTraversal = function(root) {
  //elimate edge cases first
  if (root === null) return [];
  if (root.length === 0) return root;

  //arr will hold our result, stack will help us to traverse through root in order
  const stack = [],
    arr = [];

  //loop through until all nodes are checked
  while (root !== null || stack.length > 0) {
    //go all the way to left-most node and insert nodes into stack so we can retrace later
    while (root) {
      stack.push(root);
      root = root.left;
    }

    //assign root back to the deep-most node
    root = stack.pop();
    //push root value to result array
    arr.push(root.val);
    //go to right node next
    root = root.right;
  }

  return arr;
};
