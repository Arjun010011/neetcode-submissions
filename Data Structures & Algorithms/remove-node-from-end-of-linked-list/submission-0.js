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
    let heading = head;
    let fast = heading;
    let slow = heading;

    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    if (fast === null) {
      return heading.next;
    }
    while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return heading;
  }
}
