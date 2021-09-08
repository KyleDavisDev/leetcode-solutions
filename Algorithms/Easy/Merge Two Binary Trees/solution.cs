﻿// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given two binary trees and imagine that when you put one of them to cover
// the other, some nodes of the two trees are overlapped while the others
// are not.
// You need to merge them into a new binary tree. The merge rule is that
// if two nodes overlap, then sum node values up as the new value of the
// merged node. Otherwise, the NOT null node will be used as the node of
// new tree.

// Example:
// Input:
// Tree 1                     Tree 2
//         1                         2
//        / \                       / \
//       3   2                     1   3
//      /                           \   \
//     5                             4   7
// Output:
// Merged tree:
//      3
//     / \
//    4   5
//   / \   \
//  5   4   7

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
public class Solution {
    public TreeNode MergeTrees(TreeNode root1, TreeNode root2) {
        if(root1 == null && root2 == null) return null;
        else if (root1 == null && root2 != null)
        {
            root1 = root2;
            return root1;
        }
        else if (root1 != null && root2 == null)
        {
            return root1;
        }
        else if(root1 != null && root2 != null)
        {
            root1.val = root1.val + root2.val;
            
            if(root1.left != null || root2.left != null) 
            {
                root1.left = MergeTrees(root1.left, root2.left);
            }
            
            if(root1.right != null || root2.right != null) 
            {
                root1.right = MergeTrees(root1.right, root2.right);
            }
        }
        
        return root1;    
    }
}