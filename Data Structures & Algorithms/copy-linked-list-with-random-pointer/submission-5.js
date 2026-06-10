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
    if (!head) return null;
    let start = head;
    const map = new Map();
    while (start !== null) {
      let node = new Node(start.val);
      map.set(start, node);
      start = start.next;
    }
    start = head;
    while (start !== null) {
      let copyNode = map.get(start);
      copyNode.next = map.get(start.next) || null;
      copyNode.random = map.get(start.random) || null;
      start = start.next;
    }
    return map.get(head);
  }
}
