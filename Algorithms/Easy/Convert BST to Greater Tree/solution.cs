// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  public class Solution {
    private int sum = 0;
    
    public TreeNode ConvertBST(TreeNode root) {
      if(root == null) return root;
        
      ConvertBST(root.right);
        
      sum += root.val;
      root.val = sum;
        
      ConvertBST(root.left);
       
      return root;
        
    }
  }
}