class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let stack = [];
    let fleets = 0;
    let currMax = 0;
    for (let i = 0; i < position.length; i++) {
      let time = (target - position[i]) / speed[i];
      stack.push([position[i], time]);
    }
    stack.sort((a, b) => b[0] - a[0]);
    for (let [position, time] of stack) {
      if (time > currMax) {
        fleets++;
        currMax = time;
      }
    }
    return fleets;
  }
}
