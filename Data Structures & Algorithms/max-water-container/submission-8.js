class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let result = 0;
    while (left < right) {
      let height = Math.min(heights[left], heights[right]);
      let width = right - left;
      let area = height * width;
      if (area > result) {
        result = area;
      }
      if (heights[left] > heights[right]) {
        right--;
      } else {
        left++;
      }
    }
    return result;
  }
}
