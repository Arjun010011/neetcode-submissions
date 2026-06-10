class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    if (s.length !== t.length) return false;
    for (let letter of s) {
      if (!map1.has(letter)) map1.set(letter, 1);
      else map1.set(letter, map1.get(letter) + 1);
    }
    for (let letter of t) {
      if (!map2.has(letter)) map2.set(letter, 1);
      else map2.set(letter, map2.get(letter) + 1);
    }
    for (let [key, value] of map1) {
      if (map2.has(key) && map2.get(key) === value) continue;
      else return false;
    }
    return true;
  }
}