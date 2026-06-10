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
    let dummy = new ListNode();
    let current = dummy;
    while (true) {
      let smallValue = Infinity;
      let smallIndex = -1;

      for (let i = 0; i < lists.length; i++) {
        if (  lists[i] !== null && lists[i].val < smallValue) {
          smallValue = lists[i].val;
          smallIndex = i;
        }
      }
      if (smallIndex === -1) break;
      current.next = lists[smallIndex];
      current = lists[smallIndex];
      lists[smallIndex] = lists[smallIndex].next;
    }
    return dummy.next;
  }
}
