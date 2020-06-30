/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp = [];
  let result = [];
  nums.map((item, i) => {
    const dif = target - item;
    if (temp[dif] !== undefined) {
      result = [temp[dif], i];
    }
    temp[item] = i;
  });
  return result;
};
// @lc code=end
