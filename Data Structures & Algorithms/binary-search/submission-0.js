class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let low = 0;
    let max = nums.length - 1;
    while (low <= max) {
      let mid = Math.floor((low + max) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) {
        low = mid + 1;
      } else max = mid - 1;
    }
    return -1;
  }
}