class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let res = [];
    for (let i = 0; i < temperatures.length; i++) {
      res.push(0);
    }
    let stack = [];
    stack.push(0);
    for (let i = 1; i < temperatures.length; i++) {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        let index = stack.pop();
        let val = i - index;
        res[index] = val;
      }
      stack.push(i);
    }
    return res;
  }
}
const solution = new Solution();
const temperatures = [30, 38, 30, 36, 35, 40, 28];
console.log(solution.dailyTemperatures(temperatures));
