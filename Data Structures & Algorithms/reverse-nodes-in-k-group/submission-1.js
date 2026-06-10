/** Definition for singly-linked list. class ListNode {
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
    let dummy = new ListNode(0);
    let curr = dummy;
    let current = head;
    while (current) {
      let stack = [];
      for (let i = 0; i < k; i++) {
        if (current) {
          stack.push(current);
          current = current.next;
        } else {
          break;
        }
      }
      if (stack.length < k) {
        curr.next = stack[0];
        break;
      }
      while (stack.length > 0) {
        curr.next = stack.pop();
        curr=curr.next;
      }
     

      curr.next = current;
    }
    return dummy.next;
  }
}
