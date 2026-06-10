class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
      const sorted = str.split("").sort().join("");
      if (map.has(sorted)) map.set(sorted, [...map.get(sorted), str]);
      else map.set(sorted, [str]);
    }
    const array = Array.from(map);
    return array.map((x) => x[1]);
  }
}