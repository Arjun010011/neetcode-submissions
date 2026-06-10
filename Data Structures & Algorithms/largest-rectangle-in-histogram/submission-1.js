class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
      let height = heights[i];
      let leftMost = i;
      while (leftMost - 1 >= 0 && heights[leftMost - 1] >= height) {
        leftMost--;
      }
      let rightMost = i;
      while (
        rightMost + 1 <= heights.length - 1 &&
        heights[rightMost + 1] >= height
      ) {
        rightMost++;
      }
      let width = rightMost - leftMost + 1;
      let area = height * width;
      maxArea = Math.max(area, maxArea);
    }
    return maxArea;
  }
}
