/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const specialMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const start = ["(", "{", "["];
  let current = [];
  let result = true;
  s.split("").map((item) => {
    if (start.includes(item)) {
      current.push(specialMap[item]);
    } else {
      if (current.length && current[current.length - 1] === item) {
        current.pop();
      } else {
        result = false;
      }
    }
  });
  return result ? !current.length : false;
};
// @lc code=end
