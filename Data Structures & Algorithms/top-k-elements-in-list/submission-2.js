class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let map = new Map();
    for (let num of nums) {
      !map.has(num) ? map.set(num, 0) : map.set(num, map.get(num) + 1);
    }
    const arr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map((entries) => entries[0]);
  }
}