// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// --------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const listNode = new ListNode(0);
  let currentNode = listNode;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    let val1 = l1 === null ? 0 : l1.val;
    let val2 = l2 === null ? 0 : l2.val;
    sum = val1 + val2 + sum;

    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    }

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  return listNode.next;
};
