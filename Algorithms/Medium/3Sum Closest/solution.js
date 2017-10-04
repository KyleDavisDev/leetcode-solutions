// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array S of n integers, find three integers in S such that the sum is closest to a given number,
// target. Return the sum of the three integers. You may assume that each input would have exactly one
// solution.

// Example:
// For example, given array S = {-1 2 1 -4}, and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        return target;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }

  return closest;
};
