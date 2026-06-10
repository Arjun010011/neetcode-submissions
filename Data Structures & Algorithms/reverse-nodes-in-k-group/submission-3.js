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
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    let current = head;
    let count = 0;
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }
    if (count < k) {
      return head;
    }
    current = head;
    let prev = null;
    let next = null;
    let i = 0;
    while (i < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
    head.next = this.reverseKGroup(current, k);
    return prev;
  }
}
