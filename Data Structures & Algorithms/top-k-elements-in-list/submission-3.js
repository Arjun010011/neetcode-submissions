class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    for (let num of nums) {
      if (!map.has(num)) {
        map.set(num, 1);
      } else {
        map.set(num, map.get(num) + 1);
      }
    }
    const arr = Array.from(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((e) => e[0]);
    return arr;
  }
}

