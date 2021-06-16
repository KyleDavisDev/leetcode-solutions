// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const set = new Set();
  const obj = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      obj[parseInt(nums[i])] = 1;
    }
  }

  return Object.keys(obj).map(x => parseInt(x));
};
