/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  return Array.from(new Set(nums)).length < nums.length;
};