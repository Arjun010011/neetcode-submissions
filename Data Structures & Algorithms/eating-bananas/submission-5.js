class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let high = Math.max(...piles);
    let low = 1;
    let op = high;
    let mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      let count = 0;
      for (let i = 0; i < piles.length; i++) {
        count += Math.ceil(piles[i] / mid);
      }
      if (count <= h) {
        op = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return op;
  }
}
