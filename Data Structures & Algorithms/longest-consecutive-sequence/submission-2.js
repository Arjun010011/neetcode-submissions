class Solution {
  longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLen = 0;
    for (let num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        let count = 1;

        while (set.has(current + 1)) {
          current++;
          count++;
        }
        maxLen = Math.max(maxLen, count);
      }
    }
    return maxLen;
  }
}