// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];

  let count = 0,
    candidate;

  for (let i = 0; i < len; i++) {
    if (count === 0) candidate = nums[i];
    if (candidate === nums[i]) count++;
    else count--;
  }

  return candidate;
};
