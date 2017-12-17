// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.
// The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

// Example:
// Input: Binary tree: [1,2,3,4]
//       1
//     /   \
//    2     3
//   /
// 4
// Output: "1(2(4))(3)"
// Explanation: Originallay it needs to be "1(2(4)())(3()())",
// but you need to omit all the unnecessary empty parenthesis pairs.
// And it will be "1(2(4))(3)".

// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \
//       4
// Output: "1(2()(4))(3)"
// Explanation: Almost the same as the first example,
// except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

// --------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  //check easy case
  if (t === null) return "";

  //grab node value
  let str = t.val + "";

  //check to see if node has a left or right value so we know if we need to do more recursion or not.
  if (t.right || t.left) {
    //execute recursion left first and add appropriate string values
    str += "(" + tree2str(t.left) + ")";

    //check right next and, similiary, add appropriate string values
    if (t.right) {
      str += "(" + tree2str(t.right) + ")";
    }
  }

  //return the concatinated str
  return str;
};
