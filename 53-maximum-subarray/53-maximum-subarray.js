/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
