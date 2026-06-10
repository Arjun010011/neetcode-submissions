class Solution {
  public boolean isPalindrome(String s) {
    char[] str = s.toCharArray();
    StringBuilder sc = new StringBuilder();
    for (char st : str) {
      if (Character.isLetterOrDigit(st)) {
        sc.append(Character.toLowerCase(st));
      }
    }
    int i = 0, j = sc.length() - 1;
    while (i < j) {
      if (sc.charAt(i) != sc.charAt(j)) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
}