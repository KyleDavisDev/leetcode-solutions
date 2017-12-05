// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a non-empty array of integers, return the k most frequent elements.

// Example:
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let dict = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    if (!dict[nums[i]]) {
      dict[nums[i]] = 1;
    } else {
      dict[nums[i]]++;
    }
  }

  const arr = Object.keys(dict).sort(function(a, b) {
    return dict[b] - dict[a];
  });

  return arr.slice(0, k).map(function(a) {
    return parseInt(a);
  });
};
