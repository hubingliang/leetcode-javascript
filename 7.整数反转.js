/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const border = 2 ** 31;
  const max = border - 1;
  const min = -border;
  const str = `${x}`;
  const result = str.includes("-")
    ? +`-${str.replace("-", "").split("").reverse().join("")}`
    : +str.split("").reverse().join("");
  return result > max || result < min ? 0 : result;
};
// @lc code=end
