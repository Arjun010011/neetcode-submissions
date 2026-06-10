class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let res = [];
    for (let i = 0; i < temperatures.length; i++) {
      let found = false;
      let count = 1;
      for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[i] < temperatures[j]) {
          res.push(count);
          found = true;
          break;
        }
        count++;
      }
      if (!found) {
        res.push(0);
      }
    }
    return res;
  }
}

