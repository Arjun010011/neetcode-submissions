class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    nums.sort((a, b) => a - b);
    let fin = 1;
    let largeOne = 0;
    if (nums.length === 0) return 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) continue;
      else if (nums[i] === nums[i + 1] - 1) {
        fin += 1;
      } else {
        largeOne = Math.max(largeOne, fin);
        fin = 1;
      }
    }
    return largeOne;
  }
}

