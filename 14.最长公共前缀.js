/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length) {
    let commonPrefix = strs[0];
    strs.map((str) => {
      while (str.slice(0, commonPrefix.length) !== commonPrefix) {
        commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
      }
    });

    return commonPrefix;
  } else {
    return "";
  }
};
// @lc code=end
