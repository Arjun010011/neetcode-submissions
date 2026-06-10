class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
          let rows = matrix.length;
  let col = matrix[0].length;
  let top = 0;
  let btm = rows - 1;
  while (top <= btm) {
    let midrow = Math.floor((top + btm) / 2);
    if (matrix[midrow][matrix[midrow].length - 1] < target) {
      top = midrow + 1;
    } else if (matrix[midrow][0] > target) {
      btm = midrow - 1;
    } else {
      let start = 0;
      let end = col - 1;
      while (start <= end) {
        let midcol = Math.floor((start + end) / 2);
        let midElem = matrix[midrow][midcol];
        if (midElem === target) return true;
        else if (midElem > target) {
          end = midcol - 1;
        } else {
          start = midcol + 1;
        }
      }
      return false;
    }
  }
  return false;
}
    }

