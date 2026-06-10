
class Solution {
  public int[] topKFrequent(int[] nums, int k) {
    HashMap<Integer, Integer> freqMap = new HashMap<>();
    for (int num : nums) {
      freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
    }
    List<List<Integer>> bucket = new ArrayList<>();
    for (int i = 0; i <= nums.length; i++) {
      bucket.add(new ArrayList<>());
    }
    for (int key : freqMap.keySet()) {
      int freq = freqMap.get(key);
      bucket.get(freq).add(key);
    }
    int index = 0;
    int[] arr = new int[k];
    for (int i = bucket.size() - 1; i >= 0 && index < k; i--) {
      for (int num : bucket.get(i)) {
        arr[index] = num;
        index++;
        if (index == k)
          return arr;
      }
    }
    return arr;
  }
}