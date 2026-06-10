
class Solution {
  public boolean isValidSudoku(char[][] board) {
    boolean[][] row = new boolean[9][9];
    boolean[][] col = new boolean[9][9];
    boolean[][] box = new boolean[9][9];
    for (int r = 0; r < board[0].length; r++) {
      for (int c = 0; c < board[0].length; c++) {
        char ch = board[r][c];
        if (ch == '.') {
          continue;
        }
        int num = ch - '1';
        int b = (r / 3) * 3 + (c / 3);
        if (row[r][num] || col[c][num] || box[b][num]) {
          return false;
        }
        row[r][num] = true;
        col[c][num] = true;
        box[b][num] = true;
      }
    }
    return true;
  }
}


