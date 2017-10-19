// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// --------------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  const intersect = [];

  for (let i = 0, len = nums1.length; i < len; i++) {
    if (nums2.indexOf(nums1[i]) !== -1 && intersect.indexOf(nums1[i]) === -1) {
      intersect.push(nums1[i]);
    }
  }

  return intersect;
};

// OR by comparing two sets

var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }
  const set = new Set();
  const intersect = new Set();
  for (let i = 0, len = nums1.length; i < len; i++) {
    set.add(nums1[i]);
  }
  for (let i = 0, len = nums2.length; i < len; i++) {
    if (set.has(nums2[i])) {
      intersect.add(nums2[i]);
    }
  }

  return Array.from(intersect);
};
