class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cell = board[i][j];
        if (cell === ".") continue;
        else {
          if (
            rows[i].has(cell) ||
            columns[j].has(cell) ||
            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell)
          )
            return false;
          else {
            rows[i].add(cell);
            columns[j].add(cell);
            boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
          }
        }
      }
    }
    return true;
  }
}