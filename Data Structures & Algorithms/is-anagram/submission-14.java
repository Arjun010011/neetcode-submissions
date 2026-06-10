
class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }
    HashMap<Character, Integer> set1 = new HashMap<>();
    HashMap<Character, Integer> set2 = new HashMap<>();
    for (int i = 0; i < s.length(); i++) {
      char sc = s.charAt(i);
      char sb = t.charAt(i);
      set1.put(sc, set1.getOrDefault(sc, 0) + 1);
      set2.put(sb, set2.getOrDefault(sb, 0) + 1);
    }
    if (!set1.equals(set2)) {
      return false;
    }
    return true;
  }
}

