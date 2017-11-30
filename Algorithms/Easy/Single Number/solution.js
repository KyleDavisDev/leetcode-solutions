// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array of integers, every element appears twice except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];
  const set = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!set[nums[i]]) {
      set[nums[i]] = 1;
    } else if (set[nums[i]] === 1) {
      set[nums[i]] = 2;
    }
  }

  return parseInt(Object.keys(set).filter(key => set[key] === 1)[0]);
};
