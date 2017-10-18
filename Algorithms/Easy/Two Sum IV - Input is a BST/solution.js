// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a Binary Search Tree and a target number, return true if there
// exist two elements in the BST such that their sum is equal to the given target.

// Example:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

//Target = 9
//Output: True

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28
// Output: False

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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k) {
  if (root === null) {
    return false;
  }

  const sorted = [];
  sortTree(sorted, root);

  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

function sortTree(arr, node) {
  if (node === null) {
    return;
  }

  sortTree(arr, node.left);
  arr.push(node.val);
  sortTree(arr, node.right);
}
