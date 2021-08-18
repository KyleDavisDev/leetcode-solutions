// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

namespace DefaultNamespace
{
  public class solution
  {
    public string Tree2str(TreeNode root) {
        
      if(root == null) return "";
        
      string str = root.val.ToString() ?? String.Empty;
        
      if(root.left != null || root.right != null) {
        str += "(" + Tree2str(root.left) + ")";
            
        if(root.right != null){
          str += "(" + Tree2str(root.right) + ")";
        }
      }
        
      return str;
    }
  }
}