class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    heights.push(0);
    let stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        let top = stack.pop();
        let height = heights[top];
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        let area = height * width;
        maxArea = Math.max(area, maxArea);
      }
      stack.push(i);
    }
    return maxArea;
  }
}
