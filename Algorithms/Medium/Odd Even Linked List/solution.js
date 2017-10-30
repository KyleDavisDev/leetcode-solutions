// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a singly linked list, group all odd nodes together followed by the even
// nodes. Please note here we are talking about the node number and not the value
// in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity
// and O(nodes) time complexity.

// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.

// --------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let even_head = head.next;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }
  odd.next = even_head;
  return head;
};
