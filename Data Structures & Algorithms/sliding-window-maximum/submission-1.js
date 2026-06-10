class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const arr = [];
    for (let i = 0; i <= nums.length - k; i++) {
      let q = i + k;
      let p = i;
      let max = -Infinity;
      while (p < q) {
        if (nums[p] > max) max = nums[p];
        p++;
      }
      arr.push(max);
    }
    return arr;
  }
}

