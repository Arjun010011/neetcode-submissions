class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
      let multiples = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i === j) {
          continue;
        } else {
          multiples *= nums[j];
        }
      }
      if (multiples === -0) multiples = 0;
      arr.push(multiples);
    }
    return arr;
  }
}
