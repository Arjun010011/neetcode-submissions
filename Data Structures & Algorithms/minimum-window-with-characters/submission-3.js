class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    const map_1 = new Map();
    for (let elem of t) {
      map_1.set(elem, (map_1.get(elem) || 0) + 1);
    }
    let left = 0;
    let start = 0;
    let have = 0;
    let minLength = Infinity;
    const map_2 = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map_1.has(s[i])) {
        map_2.set(s[i], (map_2.get(s[i]) || 0) + 1);
        if (map_1.get(s[i]) === map_2.get(s[i])) have++;
      }
      while (have === map_1.size) {
        const windowSize = i - left + 1;
        if (windowSize < minLength) {
          start = left;
          minLength = windowSize;
        }
        const leftChar = s[left];
        if (map_1.has(leftChar)) {
          map_2.set(leftChar, map_2.get(leftChar) - 1);

          if (map_1.get(leftChar) > map_2.get(leftChar)) have--;
        }

        left++;
      }
    }
    return minLength === Infinity ? "" : s.slice(start, start + minLength);
  }
}

