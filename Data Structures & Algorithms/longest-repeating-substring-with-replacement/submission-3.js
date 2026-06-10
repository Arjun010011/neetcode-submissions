class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const map = new Map();
    let j = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
      while (i - j + 1 - Math.max(...map.values()) > k) {
        map.set(s[j], map.get(s[j]) - 1);
        j++;
      }

      res = Math.max(i - j + 1, res);
    }
    return res;
  }
}

