class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      if (!isNaN(tokens[i])) {
        stack.push(Number(tokens[i]));
      }
      switch (tokens[i]) {
        case "+": {
          let a = stack.pop();
          let b = stack.pop();
          let c = b + a;
          stack.push(c);
          break;
        }
        case "-": {
          let a = stack.pop();
          let b = stack.pop();
          let c = b - a;
          stack.push(c);
          break;
        }
        case "*": {
          let a = stack.pop();
          let b = stack.pop();
          let c = b * a;
          stack.push(c);
          break;
        }
        case "/": {
          let a = stack.pop();
          let b = stack.pop();
          let c = b / a;
          stack.push(Math.trunc(c));
          break;
        }
      }
    }

    return stack.pop();
  }
}

