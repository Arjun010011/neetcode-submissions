class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      let low = 0;
      let high = matrix[i].length - 1;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (matrix[i][mid] === target) return true;
        else if (matrix[i][mid] < target) low = mid + 1;
        else high = mid - 1;
      }
    }

    return false;
  }
}