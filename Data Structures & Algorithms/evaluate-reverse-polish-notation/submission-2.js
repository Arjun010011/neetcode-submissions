class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const arr = [];
    for (let token of tokens) {
      if (!isNaN(token)) {
        arr.push(Number(token));
      }
      if (
        token === "+" ||
        token === "-" ||
        token === "*" ||
        token === "/" ||
        token === "%"
      ) {
        let num2 = arr.pop();
        let num1 = arr.pop();
        switch (token) {
          case "+":
            arr.push(num1 + num2);
            break;
          case "-":
            arr.push(num1 - num2);
            break;
          case "/":
            arr.push(Math.trunc(num1 / num2));
            break;
          case "%":
            arr.push(num1 % num2);
            break;
          case "*":
            arr.push(num1 * num2);
            break;
          default:
            return "invalid operation";
        }
      }
    }
    return arr[0];
  }
}

