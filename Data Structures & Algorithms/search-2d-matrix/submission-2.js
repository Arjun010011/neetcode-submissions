class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let start = 0;
    let end = matrix.length * matrix[0].length - 1;
    let n = matrix[0].length;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let row = Math.floor(mid / n);
      let col = mid % n;
      if (matrix[row][col] === target) return true;
      if (matrix[row][col] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
}

