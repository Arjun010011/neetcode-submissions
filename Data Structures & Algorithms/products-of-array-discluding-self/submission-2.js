class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const arr = [];
    let i = 0;
    while (i < nums.length) {
      arr.push(1);
      i++;
    }
    let prefix = 1;
    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      arr[i] = suffix;
      suffix *= nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
      arr[i] *= prefix;
      prefix *= nums[i];
    }

    return arr;
  }
}