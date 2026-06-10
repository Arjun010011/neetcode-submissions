class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let maxElem = 0;
    let stack = [];
    let leftMost = Array(heights.length).fill(-1);
    let rightMost = Array(heights.length).fill(heights.length);
    for (let i = 0; i < heights.length; i++) {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
      }
      if (stack.length) {
        leftMost[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }

    stack.length = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
      }
      if (stack.length) {
        rightMost[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    for (let i = 0; i < heights.length; i++) {
      rightMost[i] -= 1;
      leftMost[i] += 1;
      maxElem = Math.max(
        maxElem,
        heights[i] * (rightMost[i] - leftMost[i] + 1),
      );
    }
    return maxElem;
  }
}

const solution = new Solution();
const heights = [2, 3, 1, 7, 1, 3];
console.log(solution.largestRectangleArea(heights));
