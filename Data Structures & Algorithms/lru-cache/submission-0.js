class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.right = new Node(0, 0);
    this.left = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  delete(node) {
    let right = node.next;
    let left = node.prev;
    left.next = right;
    right.prev = left;
  }
  insert(node) {
    let prev = this.right.prev;
    prev.next = node;
    node.next = this.right;
    node.prev = prev;
    this.right.prev = node;
  }
  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.delete(node);
      this.insert(node);
      return node.val;
    }
    return -1;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.delete(this.cache.get(key));
    }
    let node = new Node(key, value);
    this.cache.set(key, node);
    this.insert(node);
    if (this.cache.size > this.capacity) {
      const lru = this.left.next;
      this.delete(lru);
      this.cache.delete(lru.key);
    }
  }
}
