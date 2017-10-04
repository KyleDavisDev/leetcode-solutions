// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let compliments = [];
  for(i in nums) {

      if(compliments[nums[i]] !== undefined ) {
          return [Number(compliments[nums[i]]), Number(i)];
      } else {
          compliments[target - nums[i]] = i;
      } 

  }
};