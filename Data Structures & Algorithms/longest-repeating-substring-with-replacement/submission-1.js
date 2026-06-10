class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let maxLength = 0;
    let left = 0;
    let maxCount = 0;
    let freq = new Map();

    for (let right = 0; right < s.length; right++) {
      freq.set(s[right], (freq.get(s[right]) || 0) + 1);
      maxCount = Math.max(maxCount, freq.get(s[right]));

      while (right - left + 1 - maxCount > k) {
        freq.set(s[left], freq.get(s[left]) - 1);
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
}
