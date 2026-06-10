class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    let set = new Set();
    for (let num of nums) {
      if (!set.has(num)) {
        set.add(num);
      } else return num;
    }
  }
}

