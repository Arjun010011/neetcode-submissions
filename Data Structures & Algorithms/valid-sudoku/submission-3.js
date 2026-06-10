class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const box = Array.from({ length: 9 }, () => new Set());
    const row = Array.from({ length: 9 }, () => new Set());
    const column = Array.from({ length: 9 }, () => new Set());
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let num = board[i][j];
        if (num === ".") continue;
        if (
          box[Math.floor(i / 3)*3 + Math.floor(j / 3)].has(num) ||
          row[i].has(num) ||
          column[j].has(num)
        ) {
          return false;
        } else {
          row[i].add(num);
          column[j].add(num);
          box[Math.floor(i / 3)*3 + Math.floor(j / 3)].add(num);
        }
      }
    }
    return true;
  }
}