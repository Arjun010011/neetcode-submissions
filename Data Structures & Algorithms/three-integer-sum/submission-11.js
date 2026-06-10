class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums = nums.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i];
      while (left < right) {
        let val = nums[left] + nums[right];
        if (val === target) {
          arr.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          // Skip duplicate values for nums[right]
          // Move right pointer backward as long as it points to the same value
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (val < target) left++;
        else right--;
      }
    }

    return arr;
  }
}

