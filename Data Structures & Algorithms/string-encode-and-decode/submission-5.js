class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let string1 = "";
    for (let str of strs) {
      string1 += str + ":;";
    }
    return string1;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    return str.split(":;").slice(0,-1);
  }
}