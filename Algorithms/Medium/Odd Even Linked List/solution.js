// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  //if head is invalid or there is no .next node, return head
  if (head === null || head.next === null) {
    return head;
  }

  //we are going to form an "odd" linked list and an "even" linked list. Then, we will combine
  //the end of the odd chain to the beginning of the even chain
  let odd = head; //first node is considered odd
  let even = head.next; //next node is even
  let even_head = head.next; //reference to the beginning of the even chain
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next; //next odd node will be two .next's away
    even.next = even.next.next; //next even with will be two .next's away

    odd = odd.next; //shift to next node
    even = even.next;//shift to next node
  }
  //connect the chains
  odd.next = even_head;
  return head;
};


//Working through given example:
// if input is 1->2->3->4->5->NULL

// Before the while loop: the variables odd, even, and even_head will be
// 1->2->3->4->5->NULL, 2->3->4->5->NULL, and 1->2->3->4->5->NULL respectively.

// First iteration of loop: odd.next=3->4->5->NULL, even.next=4->5->NULL meaning
// that odd=1->3->4->5->NULL, even=2->4->5->NULL
// then, odd and even get shifted so odd=3->4->5->NULL and even=4->5->NULL

// Second iteration of loop: odd.next=5->NULL, even.next=NULL meaning
// that odd=3->5->NULL, even=4->NULL
// then, odd and even get shifted so odd=5->NULL and even=NULL;

// since even is null, the loop breaks.
// Now, the next value of odd get sets to the beginning of the even chain.
// return the put-together chain.
