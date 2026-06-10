class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let cleanS = s.replace(/[^a-zA-Z0-9]/g, "");
    cleanS = cleanS.toLowerCase();
    let left = 0;
    let right = cleanS.length - 1;
    while (left < right) {
      if (cleanS[left] === cleanS[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  }
}