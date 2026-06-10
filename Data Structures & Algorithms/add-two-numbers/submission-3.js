/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let carry = 0;
    let head = new ListNode();
    head.val = (l1.val + l2.val) % 10;
    carry = Math.floor((l1.val + l2.val) / 10);
    let prev = head;
    let l3 = l1.next;
    let l4 = l2.next;
    while (l3 || l4) {
      let node = new ListNode();
      let l3Val = 0;
      let l4Val = 0;

      prev.next = node;
      if (l3) {
        l3Val = l3.val;

        l3 = l3.next;
      }
      if (l4) {
        l4Val = l4.val;

        l4 = l4.next;
      }
      let val = l3Val + l4Val + carry;
      node.val = val % 10;
      carry = Math.floor(val / 10);
      prev = node;
    }
    if (carry > 0) {
      prev.next = new ListNode(carry);
    }
    return head;
  }
}
