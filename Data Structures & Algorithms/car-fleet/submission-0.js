class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let stack = [];
    const cars = position.map((pos, index) => [pos, speed[index]]);
    cars.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < cars.length; i++) {
      stack.push((target - cars[i][0]) / cars[i][1]);
       if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
        stack.pop();  // Remove the slower car that joins the fleet
      }
    }
    return stack.length;
  }
}

