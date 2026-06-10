
class Solution {
  public int longestConsecutive(int[] nums) {
    HashSet<Integer> set = new HashSet<>();
    for (int num : nums) {
      set.add(num);
    }
    int result = 0;
    for (int num : nums) {
      if (!set.contains(num - 1)) {
        int length = 1;
        int curr = num;
        while (set.contains(curr + 1)) {
          length++;
          curr++;
        }
        if (length > result) {
          result = length;
        }
      }
    }
    return result;
  }
}