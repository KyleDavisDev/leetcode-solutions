// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// Example:
// Input: The root of a Binary Search Tree like this:
//    5
//  /   \
// 2     13

// Output: The root of a Greater Tree like this:
//    18
//  /   \
// 20     13

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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  //adder will hold the value we need to add to each node
  let adder = 0;
  //shorthand for: if root is truthy, execute addToNode function
  root && addToNode(root);
  return root;

  //function declaration because we dont necessarily need to return anything. Function is inside converBST scope to have access to adder variable. This function is a DFS going down the right side of the tree first.
  function addToNode(root) {
    //if root.right exists, recursive call function
    root.right && addToNode(root.right);

    //add adder to the node's current value
    root.val += adder;

    //set adder the new node's value. This will cause adder to now hold the value of every node whose value is greater than the current node
    adder = root.val;

    //iff root.left exists, recursive call function
    root.left && addToNode(root.left);
  }
};
