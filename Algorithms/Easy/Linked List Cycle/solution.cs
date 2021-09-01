// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

// --------------------------------------------------------

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        if (head == null || head.next == null) return false;

        var cursor1 = head;
        var cursor2 = head.next;

        while (cursor2 != null && cursor2.next != null)
        {
            if (cursor1 == cursor2) return true;
            
            cursor1 = cursor1.next;
            cursor2 = cursor2.next.next;
        }

        return false;
    }
}