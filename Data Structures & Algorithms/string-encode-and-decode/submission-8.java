
class Solution {

  public String encode(List<String> strs) {
    StringBuilder str = new StringBuilder();
    for (int i = 0; i < strs.size(); i++) {
      String s = strs.get(i);
      str.append(s.length()).append("#").append(s);
    }
    return str.toString();
  }

  public List<String> decode(String str) {
    List<String> strs = new ArrayList<>();
    int i = 0;
    while (i < str.length()) {
      int j = i;
      while (str.charAt(j) != '#') {
        j++;
      }
      int length = Integer.parseInt(str.substring(i, j));
      j++;
      strs.add(str.substring(j, j + length));
      i = j + length;
    }
    return strs;
  }
}
