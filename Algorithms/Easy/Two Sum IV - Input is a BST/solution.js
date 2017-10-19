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
  //check if null so we can skip algorithm
  if (root === null) {
    return false;
  }

  //init array and recursively turn binary tree into sorted array
  const sorted = [];
  sortTree(sorted, root);

  //going to impliment an outside-to-in algo
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === k) {
      //found the sweet spot -- return true
      return true;
    } else if (sum < k) {
      //if sum is too big, add smaller numbers together by decreasing right
      left++;
    } else {
      //if sum is too small, add bigger numbers together by increasing left
      right--;
    }
  }

  //if no combination works, return false
  return false;
};

function sortTree(arr, node) {
  //if null, then we are at the end and should go back
  if (node === null) {
    return;
  }

  //the order of the following operations is important to go all the way to the left first to grab smallest number
  //if we wanted array to be sorted from biggest to smallest, simply rearrange the sortTree recursive functions
  //go into left node
  sortTree(arr, node.left);

  //add val to array
  arr.push(node.val);

  //go into right node
  sortTree(arr, node.right);
}
