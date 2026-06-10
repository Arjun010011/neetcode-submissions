class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(token);
      } else {
        let num1 = Number(stack.pop());
        let num2 = Number(stack.pop());
        let operation;
        switch (token) {
          case "+":
            operation = Math.ceil(num2 + num1);
            console.log("+");
            break;
          case "-":
            operation = Math.ceil(num2 - num1);

            console.log("-");
            break;
          case "*":
            operation = Math.ceil(num2 * num1);
            console.log("*");
            break;
          case "/":
            operation = Math.trunc(num2 / num1);

            console.log("/");
            break;
          default:
            operation = null;
        }
        console.log("operation", operation, "num1", num1, "num2", num2);
        stack.push(operation);
      }
    }
    return stack.pop();
  }
}

const solution = new Solution();
const tokens = ["1", "2", "+", "3", "*", "4", "-"];
console.log(solution.evalRPN(tokens));
