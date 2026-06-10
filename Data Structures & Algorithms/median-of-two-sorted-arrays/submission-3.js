class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    let var1 = nums1;
    let var2 = nums2;
    const total = var1.length + var2.length;
    const half = Math.floor(total / 2);
    if (var2.length < var1.length) {
      let temp = var1;
      var1 = var2;
      var2 = temp;
    }
    let left = 0;
    let right = var1.length;
    while (left <= right) {
      let i = Math.floor((left + right) / 2);
      let j = half - i;
      let var1Left = i > 0 ? var1[i - 1] : -Infinity;
      let var1Right = i < var1.length ? var1[i] : Infinity;
      let var2Left = j > 0 ? var2[j - 1] : -Infinity;
      let var2Right = j < var2.length ? var2[j] : Infinity;
      if (var1Left <= var1Right && var2Left <= var2Right) {
        if (total % 2) {
          return Math.min(var1Right, var2Right);
        }
        return (
          (Math.max(var1Left, var2Left) + Math.min(var1Right, var2Right)) / 2
        );
      } else if (var1Left > var2Right) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
  }
}


