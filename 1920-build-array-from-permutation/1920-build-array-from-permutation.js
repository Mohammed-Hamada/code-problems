/**
 * @param {number[]} nums
 * @return {number[]}
 */

const buildArray = (nums) => {
  let ans = [];
  nums.forEach((num, index) => {
    ans.push(nums[nums[index]]);
  });
  return ans;
};