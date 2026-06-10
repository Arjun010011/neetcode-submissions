class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
      let sort = str.split("").sort().join("");
      if (!map.has(sort)) map.set(sort, [str]);
      else map.set(sort, [...map.get(sort), str]);
    }
    return Array.from(map.values());
  }
}