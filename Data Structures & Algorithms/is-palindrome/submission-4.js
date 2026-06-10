class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s.toLocaleLowerCase();
    let i = 0;
    s = s.replace(/[^a-zA-Z0-9]/g, "");

    let j = s.length - 1;
    console.log(s);
    while (i <= j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
}