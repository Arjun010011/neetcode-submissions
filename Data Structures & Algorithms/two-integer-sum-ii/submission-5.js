class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
      let targeting = numbers[left] + numbers[right];
      if (targeting === target) {
        return [left + 1, right + 1];
      }
      if (targeting < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

