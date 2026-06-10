class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const arr = [];
    let map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let char of s) {
      if (char === "(" || char === "[" || char === "{") {
        arr.push(char);
      }

      if (char === ")" || char === "]" || char === "}") {
        if (arr.length !== 0 && arr[arr.length - 1] === map[char]) {
          arr.pop();
        } else {
          return false;
        }
      }
    }
    if(arr.length === 0)
    return true;
    else return false
  }
}