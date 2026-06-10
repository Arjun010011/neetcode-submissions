class Solution{

  public String encode(List<String> strs) {
    StringBuilder sc = new StringBuilder();
    for (String str : strs) {
      sc.append(str.length()).append("#").append(str);
    }
    return sc.toString();
  }

  public List<String> decode(String str) {
    List<String> strs = new ArrayList<>();
    int i = 0;
    while (i < str.length()) {
      int j = i;
      while(str.charAt(j) != '#') {
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