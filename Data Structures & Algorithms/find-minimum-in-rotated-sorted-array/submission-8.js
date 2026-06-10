class Solution {
  findMin(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      console.log(`low:[${low}]:`, nums[low]);
      console.log(`high:[${high}]:`, nums[high]);
      // If current subarray is sorted, the first element is min
      if (nums[low] <= nums[high]) {
        return nums[low];
      }

      let mid = Math.floor((low + high) / 2);
      console.log(`mid:[${mid}]:`, nums[mid]);
      // Left half is sorted, so pivot must be in right half
      if (nums[low] <= nums[mid]) {
        low = mid + 1;
      }
      // Right half is sorted, so pivot must be in left half
      else {
        high = mid;
      }
    }
  }
}

