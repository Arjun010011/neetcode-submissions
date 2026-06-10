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
   * @return {void}
   */
  reorderList(head) {
    //splitted the linked list and set part2 as the starting point of the secondhalf
    let start = head;
    let middle = head;
    while (start !== null && start.next !== null) {
      start = start.next.next;
      middle = middle.next;
    }
    let part2 = middle.next;
    middle.next = null;
    //reversed the linked list and set back the current to part2 as the reversed linked list head
    let prev = null;
    let next = null;
    let current = part2;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    part2 = prev;
    //rearrange the linked list to create the required order of the linked list
    start = head;
    while (start !== null && part2 !== null) {
      let next1 = start.next;
      let next2 = part2.next;
      start.next = part2;
      part2.next = next1;
      start = next1;
      part2 = next2;
    }
    return head;
  }
}
