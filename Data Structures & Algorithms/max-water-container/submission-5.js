class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;
    while (left < right) {
      let leftHeight = heights[left];
      let rightHeight = heights[right];
      let length = Math.min(leftHeight, rightHeight);
      let width = right - left;
    
      max = Math.max(max, length * width);
      if (heights[left] <= heights[right]) left++;
      else right--;
    }
    return max;
  }
}