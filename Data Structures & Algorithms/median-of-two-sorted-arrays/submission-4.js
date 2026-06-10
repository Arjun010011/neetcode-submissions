class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    if (nums2.length > nums1.length) {
      return this.findMedianSortedArrays(nums2, nums1);
    }
    let left = 0;
    let right = nums1.length;
    let total = nums1.length + nums2.length;
    let half = Math.floor(total / 2);
    while (left <= right) {
      let i = Math.floor((left + right) / 2);
      let j = half - i;

      let nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
      let nums1Right = i < nums1.length ? nums1[i] : Infinity;
      let nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
      let nums2Right = j < nums2.length ? nums2[j] : Infinity;
      if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
        if (total % 2) {
          return Math.min(nums1Right, nums2Right);
        }
        return (
          (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) /
          2
        );
      } else if (nums1Left > nums2Right) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
  }
}

