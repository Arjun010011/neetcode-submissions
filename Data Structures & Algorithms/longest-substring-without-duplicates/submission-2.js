class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const set = new Set();
    let maxLength = 0;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
      maxLength = Math.max(maxLength, i - j + 1);
      console.log("i value", i, "j value:", j, "set", set);
    }
    return maxLength;
  }
}

