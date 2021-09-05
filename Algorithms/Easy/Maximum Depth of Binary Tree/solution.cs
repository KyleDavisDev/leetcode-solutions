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
    public int MaxDepth(TreeNode root) {
        if(root == null) return 0;
        int depth = GoDown(root, 1);
                
        return depth;
    }
    
    public int GoDown(TreeNode root, int curDepth) 
    {
        if(root == null) return curDepth;
        
        int leftDepth = curDepth;
        if(root.left != null) leftDepth = GoDown(root.left, leftDepth+1);
        
        int rightDepth = curDepth;
        if(root.right != null) rightDepth = GoDown(root.right, rightDepth+1);
        
        return leftDepth > rightDepth ? leftDepth : rightDepth;
    }
}