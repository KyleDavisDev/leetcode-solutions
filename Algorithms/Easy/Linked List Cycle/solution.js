// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

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
 * @return {boolean}
 */
const hasCycle = head => {
  if (!head) return false;

  if (head.next === null || head.next.next === null) return false;

  let walker = head.next,
    jumper = head.next.next;

  while (jumper !== walker) {
    if (jumper.next === null || jumper.next.next === null) return false;

    jumper = jumper.next.next;
    walker = walker.next;
  }

  return true;
};
