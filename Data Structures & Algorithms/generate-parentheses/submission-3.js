class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    let stack = [];
    let res = [];
    function backTrack(openP, closedP) {
      if (openP === n && closedP === n) {
        let joinedString = stack.join("");
        res.push(joinedString);
        return;
      }
      if (openP < n) {
        stack.push("(");
        backTrack(openP + 1, closedP);
        stack.pop();
      }
      if (openP > closedP) {
        stack.push(")");
        backTrack(openP, closedP + 1);
        stack.pop();
      }
    }
    backTrack(0, 0);
    return res;
  }
}

