class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let maxVal = Math.max(...piles);

    let low = 1;
    let high = maxVal;
    let minVal = Infinity;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let totalVal = 0;
      for (let j = 0; j < piles.length; j++) {
        totalVal += Math.ceil(piles[j] / mid);
      }
      if (totalVal <= h) {
        minVal = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return minVal;
  }
}

