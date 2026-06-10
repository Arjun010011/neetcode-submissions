class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let hashMap = new Map();
    for (let str of strs) {
      let sort = str.split("").sort().join("");
      if (!hashMap.has(sort)) {
        hashMap.set(sort, [str]);
      } else {
        hashMap.get(sort).push(str);
      }
    }

    return Array.from(hashMap.values());
  }
}

