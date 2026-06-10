// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    if(!head) return null
    let dummy = head;
    while (dummy) {
      let newNode = new Node(dummy.val);
      newNode.next = dummy.next;
      dummy.next = newNode;
      dummy = newNode.next;
    }

    dummy = head;
    while (dummy) {
      if (dummy.random) {
        dummy.next.random = dummy.random.next;

      }
              dummy = dummy.next.next;
    }
    let orginal = head;
    let copy = head.next;
    let copyHead = copy;
    while (orginal) {
      orginal.next = orginal.next.next;
      if (copy.next) {
        copy.next = copy.next.next;
      }
      orginal = orginal.next
      copy = copy.next
    }
    return copyHead
  }
}
