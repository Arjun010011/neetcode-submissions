class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let len = "";
    for (let str of strs) {
      len += str.length + ":;" + str;
    }
    return len;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(strs) {
    const finalStr = [];
    for (let i = 0; i < strs.length; i++) {
      let num = "";
      while (!isNaN(strs[i])) {
        num += strs[i];
        i++;
      }
      if (!isNaN(num)) {
        const nums = Number(num);
        const slice = strs.slice(i + 2, i + nums + 2);
        finalStr.push(slice);
        i = i + nums + 1;
      }
    }

    return finalStr;
  }
}

