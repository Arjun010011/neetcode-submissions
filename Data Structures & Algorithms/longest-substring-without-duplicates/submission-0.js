class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let set1 = new Set();
    let left = 0;
    let substring = 0;
    for (let right = 0; right < s.length; right++) {
      while (set1.has(s[right])) {
        set1.delete(s[left]);
        left++;
      }
      set1.add(s[right]);
      substring = Math.max(substring, right - left + 1);
    }
    return substring;
  }
}