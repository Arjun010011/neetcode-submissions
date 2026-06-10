class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let high = Math.max(...piles);
    let low = 0;
    let minVal = Infinity;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let score = 0;
      for (let pile of piles) {
        score += Math.ceil(pile / mid);
      }
      if (score <= h) {
        minVal = mid;
        high = mid - 1;
      } else low = mid + 1;
    }
    return minVal;
  }
}