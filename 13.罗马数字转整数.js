/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const special = { I: ["V", "X"], X: ["L", "C"], C: ["D", "M"] };
  const stringArray = s.split("");
  let result = 0;
  let skip = false;
  stringArray.map((item, index) => {
    if (skip) {
      skip = false;
      return;
    }
    const specialCase = special[item];
    if (specialCase && specialCase.includes(stringArray[index + 1])) {
      result = result + map[stringArray[index + 1]] - map[item];
      skip = true;
    } else {
      result = result + map[item];
    }
  });
  return result;
};
// @lc code=end
