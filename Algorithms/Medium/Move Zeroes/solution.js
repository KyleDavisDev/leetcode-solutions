// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Example:
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums
// should be [1, 3, 12, 0, 0].

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  if (nums === null || nums.length === 0) {
    return;
  }

  let count = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      let temp = nums[i];
      nums[i] = nums[i - count];
      nums[i - count] = temp;
    }
  }
};
