class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let sentence = s
      .toLocaleLowerCase()
      .split(" ")
      .join("")
      .replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = sentence.length - 1;
    while (left <= right) {
      if (sentence[left] !== sentence[right]) return false;
      left++;
      right--;
    }
    return true;
  }
}
