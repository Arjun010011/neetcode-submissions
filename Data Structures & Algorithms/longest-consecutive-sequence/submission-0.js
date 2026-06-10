class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let longest = 0;
    for (let num of nums) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let streak = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          streak += 1;
        }

        longest = Math.max(longest, streak);
      }
    }
    return longest;
  }
}