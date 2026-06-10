
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array(9).fill(null).map(()=> new Set());
        let cols = Array(9).fill(null).map(()=> new Set());
        let grids = Array(9).fill(null).map(()=> new Set());

        for (let i = 0; i < board.length; i++) {
           for (let j = 0; j < board.length; j++) {
                let num = board[i][j];
                if(num !== '.'){
                    let gridIndex = Math.floor(i/3)*3 + Math.floor(j/3);
                
                    if(rows[i].has(num) || cols[j].has(num) || grids[gridIndex].has(num))
                        return false
                
                    rows[i].add(num);
                    cols[j].add(num);
                    grids[gridIndex].add(num);
                }
                
           } 
        }
        return true
    }
}