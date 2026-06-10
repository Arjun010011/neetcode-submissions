class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let one_string = "";
    for (let str of strs) {
      one_string += str + ":;";
    }
    return one_string;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    return str.split(":;").slice(0, -1);
  }
}
