class Solution {
  public int[] topKFrequent(int[] nums, int k) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int num : nums) {
      map.put(num, map.getOrDefault(num, 0) + 1);
    }
    List<List<Integer>> buckets = new ArrayList<>();
    for (int i = 0; i <= nums.length; i++) {
      buckets.add(new ArrayList<>());
    }
    for (int key : map.keySet()) {
      int freq = map.get(key);
      buckets.get(freq).add(key);

    }
    int[] result = new int[k];
    int index = 0;
    for (int i = buckets.size() - 1; i >= 0 && index < k; i--) {
      if (buckets.get(i) != null) {
        for (int l : buckets.get(i)) {
          result[index++] = l;
          if (index == k)
            break;
        }
      }
    }
    return result;
  }
}