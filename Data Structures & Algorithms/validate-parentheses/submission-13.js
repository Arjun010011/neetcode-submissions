class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    let map = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i]);
      } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
        let index = stack.length - 1;
        let check = map[s[i]];
        if (stack[index] == check) {
          stack.pop(s[index]);
        } else {
          stack.push(s[i]);
        }
      }
    }
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
