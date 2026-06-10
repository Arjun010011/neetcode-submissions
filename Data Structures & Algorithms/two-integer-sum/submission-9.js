class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let remain = target - nums[i];
      if (map.has(remain)) return [i, map.get(remain)];
      else map.set(nums[i], i);
    }
  }
}

