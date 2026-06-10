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
        let current = head;
    let stacks = [];
    while (current !== null) {
      stacks.push(current);
      current = current.next;
    }
    let right = stacks.length - 1;
    let left = 0;
    while (left < right) {
      stacks[left].next = stacks[right];
      left++;
    
      stacks[right].next = stacks[left];
      right--;
    }
    return stacks[left].next = null;
    }
}
