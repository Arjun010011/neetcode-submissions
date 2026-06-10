class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxVal = 0;
    while (left < right) {
      maxVal = Math.max(
        Math.min(heights[left], heights[right]) * (right - left),
        maxVal,
      );
      if (heights[left] < heights[right]) left++;
      else right--;
    }
    return maxVal;
  }
}