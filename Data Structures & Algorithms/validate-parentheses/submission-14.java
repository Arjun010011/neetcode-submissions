
class Solution {
  public boolean isValid(String s) {
    char[] sarr = s.toCharArray();
    Stack<Character> stack = new Stack<>();
    HashMap<Character, Character> map = new HashMap<>();
    map.put(')', '(');
    map.put(']', '[');
    map.put('}', '{');
    for (int i = 0; i < sarr.length; i++) {
      if (sarr[i] == '(' || sarr[i] == '{' || sarr[i] == '[') {
        stack.push(sarr[i]);
      } else if (sarr[i] == ')' || sarr[i] == ']' || sarr[i] == '}') {
        char check = map.get(sarr[i]);
        if (stack.isEmpty()) {
          return false;
        }
         else {
            if(stack.isEmpty()) return false;
            char top = stack.pop();
            if(top != check) return false;
        }
      }
    }
    if (stack.isEmpty()) {
      return true;
    } else
      return false;
  }
}