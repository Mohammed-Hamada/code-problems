/**
 * @param {number[]} nums
 * @return {number[]}
 */

const buildArray = (nums) => {
  let ans = [];
    let i = 0;
    while(i < nums.length){
        ans[i] = nums[nums[i]];
        i++;
    }
        return ans;     
};