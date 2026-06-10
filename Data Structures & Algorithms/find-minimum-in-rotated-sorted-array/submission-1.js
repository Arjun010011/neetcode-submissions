class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    let minVal = nums[0];
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      minVal = Math.min(minVal, nums[mid]);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return minVal;
  }
}