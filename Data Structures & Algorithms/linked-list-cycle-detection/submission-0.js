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
        let current = head;
    let stacks = [];
    while (current !== null) {
      stacks.push(current);
      current = current.next;
      for (let stack of stacks) {
        if (stack === current) {
          return true;
        }
      }
    }
    return false;
    }
}
