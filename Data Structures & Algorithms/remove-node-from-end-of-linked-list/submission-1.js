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
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let pointer1 = dummy;
    let i = 0;
    while (i <= n) {
      pointer1 = pointer1.next;
      i++;
    }
    let pointer2 = dummy;
    while (pointer1 !== null) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
    pointer2.next = pointer2.next.next;
    return dummy.next;
  }
}
