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
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    function mergeKlists(lists) {
      if (!lists.length) return null;
      if (lists.length === 1) return lists[0];
      let mid = Math.floor(lists.length / 2);
      let left = mergeKlists(lists.slice(0, mid));
      let right = mergeKlists(lists.slice(mid));
      return mergeTwoList(left, right);
    }
    function mergeTwoList(left, right) {
      let dummy = new ListNode(-1);
      let tail = dummy;
      while (left && right) {
        if (left.val <= right.val) {
          tail.next = left;
          left = left.next;
          tail = tail.next;
        } else {
          tail.next = right;
          right = right.next;
          tail = tail.next;
        }
      }
      if (left === null) {
        tail.next = right;
      }
      if (right === null) {
        tail.next = left;
      }
      return dummy.next;
    }
    return mergeKlists(lists);
  }
}
