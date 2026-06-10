class Solution {
  public boolean isPalindrome(String s) {
    int left = 0;
    String cleanS = s.replaceAll("[^a-zA-Z0-9]", "");
    cleanS = cleanS.toLowerCase();
    int right = cleanS.length() - 1;
    while (left <= right) {
      if (cleanS.charAt(left) != cleanS.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}
