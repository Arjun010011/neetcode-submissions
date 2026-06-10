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
   * @return {boolean}
   */
  hasCycle(head) {
    let start1 = head;
    let start2 = head.next;
    while (start1 !== null && start2 !== null) {
      if (start1 === start2) return true;
      start1 = start1.next;
      if (start2.next === null) return false;
      start2 = start2.next.next;
    }
    return false;
  }
}
