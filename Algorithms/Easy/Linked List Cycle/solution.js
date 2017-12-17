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
//Our goal here is going to be to have two variables going through the list at the same time and seeing whether or not they ever meet up with each other
const hasCycle = head => {
  //check to make sure the list is valid
  if (!head) return false;

  //check to see if the list has enough children to even bother with the algo or not
  if (head.next === null || head.next.next === null) return false;

  //init "walker" which will take single steps, and "jumper" which will take two steps
  let walker = head.next,
    jumper = head.next.next;

  //loop until they match or until we are at the end of the list
  while (jumper !== walker) {
    //check to see if we can make the next "jump" else return false (we are at the end of the list)
    if (jumper.next === null || jumper.next.next === null) return false;

    //advance walker and jumper
    jumper = jumper.next.next;
    walker = walker.next;
  }

  //return true if jumper and walker are ever equivalent
  return true;
};
