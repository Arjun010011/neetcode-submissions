class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let maxVolume = 0;
    for (let i = 0; i < height.length; i++) {
      let j = 0;
      let leftMax = 0;
      while (j < i) {
        if (leftMax < height[j]) {
          leftMax = height[j];
          j++;
        } else {
          j++;
        }
      }
      let k = i + 1;
      let rightMax = 0;
      while (k < height.length) {
        if (rightMax < height[k]) {
          rightMax = height[k];
          k++;
        } else {
          k++;
        }
      }
      let min = Math.min(leftMax, rightMax);
      if (min - height[i] > 0) maxVolume += min - height[i];
    }

    return maxVolume;
  }
}