class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let arr = [];
    let countx = 0;
    let county = 0;
    if (s.length % 2 !== 0) {
      return false;
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        arr.push(s[i]);
        countx++;
        //console.log(arr);
      } else if (
        (s[i] === ")" && arr[arr.length - 1] === "(") ||
        (s[i] === "]" && arr[arr.length - 1] === "[") ||
        (s[i] === "}" && arr[arr.length - 1] === "{")
      ) {
        // console.log(arr[arr.length - 1]);
        arr.pop();
        county++;
      } else {
        county++;
      }
    }
    if (countx === county) {
      if (arr.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
