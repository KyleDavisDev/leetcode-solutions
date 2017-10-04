// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note: The solution set must not contain duplicate triplets.

// Example:
// For example, given array S = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums = nums.sort(function(a, b) {
    return a - b;
  });
  const sol = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return sol;
    }

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = len - 1; j < k; ) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        sol.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return sol;
};
