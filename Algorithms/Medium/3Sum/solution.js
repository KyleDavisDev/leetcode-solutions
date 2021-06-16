// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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
  //if there are not at least 3 integers given, then no solution exists
  if (nums.length < 3) {
    return [];
  }

  //sort array from smallest to greatest
  nums = nums.sort(function(a, b) {
    return a - b;
  });

  //empty array and calculate the size of the nums array only once
  const sol = [];
  const len = nums.length;

  //iterate over array
  for (let i = 0; i < len; i++) {
    //if nums[i] is positive, then there cannot exists two other positive numbers such
    //that the sum is equal to zero
    if (nums[i] > 0) {
      return sol;
    }

    //Skip duplicate num[i] values
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    //start j one after i, start k and end of array, loop until values either "cross" or are equal
    for (let j = i + 1, k = len - 1; j < k; ) {
      //find sum
      let sum = nums[i] + nums[j] + nums[k];

      //if equal to zero, then push into solution set
      //can safely increase j and decrease k at this point
      if (sum === 0) {
        sol.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        //skip duplicates going up
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }

        //skip duplicates going down
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        //sum is too larger so decrease k to get a smaller nums[k] value
        k--;
      } else {
        //sum is too small to increase j to get a bigger nums[j] value
        j++;
      }
    }
  }

  //return set
  return sol;
};
