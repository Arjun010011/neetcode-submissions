class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack = [...this.stack, val];
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    let min = Infinity;
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < min) {
        min = this.stack[i];
      }
    }
    return min;
  }
}
