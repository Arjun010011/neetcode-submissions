class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let median = 0;
    const len = merged.length;
    if (len % 2 === 0) {
      const mid1 = len / 2 - 1;
      const mid2 = len / 2;
      median = (merged[mid1] + merged[mid2]) / 2;
      return median;
    } else {
      return merged[Math.floor(len / 2)];
    }
  }
}