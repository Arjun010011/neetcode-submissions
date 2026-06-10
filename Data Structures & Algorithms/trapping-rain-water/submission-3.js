class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let left = 0;
    let right = height.length - 1;
    let trappedWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while (left < right) {
      if (height[left] < height[right]) {
        if (maxLeft < height[left]) {
          maxLeft = height[left];
        } else {
          trappedWater += maxLeft - height[left];
        }
        left++;
      } else {
        if (maxRight < height[right]) {
          maxRight = height[right];
        } else {
          trappedWater += maxRight - height[right];
        }
        right--;
      }
    }
    return trappedWater;
  }
}