// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an array S of n integers, find three integers in S such that the sum is closest
//to a given number, target. Return the sum of the three integers. You may assume that//
// each input would have exactly one solution.

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


  //sort array from smallest to biggest
  nums = nums.sort(function(a, b) {
    return a - b;
  });

  //get a starting value and/or use this value if nums.length <= 3
  let closest = nums[0] + nums[1] + nums[2];

  //loop through array, can stop 2 before end
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    //start j right after i, and k at end of array
    let j = i + 1;
    let k = len - 1;

    //loop until values cross or are equal
    while (j < k) {
      //get sum
      let sum = nums[i] + nums[j] + nums[k];

      //if the sum matches the target exactly, we are done
      if (sum === target) {
        return target;
      } else if (sum < target) {
        //sum is too small so increase j to get bigger nums[j] value
        j++;
      } else {
        //sum is too large so decrease k to get bigger nums[k] value
        k--;
      }

      //if new sum is closer to target value than the closest value, keep new sum as closest
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
    }
  }

  return closest;
};
