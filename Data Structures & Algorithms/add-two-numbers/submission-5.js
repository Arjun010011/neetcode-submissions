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
    let dummy1 = new ListNode(-1);
    let dummy = dummy1;
    let start1 = l1;
    let start2 = l2;
    let carry = 0;
    while (start1 !== null || start2 !== null || carry !== 0) {
      let val1 = start1 ? start1.val : 0;
      let val2 = start2 ? start2.val : 0;
      let value = val1 + val2 + carry;
      carry = Math.floor(value / 10);
      let node = new ListNode(value % 10);
      dummy.next = node;
      dummy = dummy.next;
      if (start1) start1 = start1.next;
      if (start2) start2 = start2.next;

      if (carry !== 0) {
        let node = new ListNode(carry);
        dummy.next = node;
      }
    }
    dummy = dummy1.next;
    return dummy;
  }
}
