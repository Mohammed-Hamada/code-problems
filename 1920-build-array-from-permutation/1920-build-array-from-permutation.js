/**
 * @param {number[]} nums
 * @return {number[]}
 */

function buildArray(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; ++i) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};