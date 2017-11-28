// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

// 1. The root is the maximum number in the array.
// 2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// 3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

// Construct the maximum tree by the given array and output the root node of this tree.

// Example:
Input: [3, 2, 1, 6, 0, 5];
// Output: return the tree root node representing the following tree:
//       6
//     /   \
//    3     5
//     \    /
//      2  0
//        \
//         1

// --------------------------------------------------------
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  let largest = 0,
    ind = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
      ind = i;
    }
  }

  const node = new TreeNode(largest);

  node.left = constructMaximumBinaryTree(nums.slice(0, ind));
  node.right = constructMaximumBinaryTree(nums.slice(ind + 1));

  return node;
};
