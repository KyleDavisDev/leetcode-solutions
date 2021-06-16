// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// --------------------------------------------------------

// Note: Since the decription is not very clear, it's worth stating that
// the problem is looking for you to find all all of the numbers that shared
// between both arrays but do not return duplicates.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  //check if either are empty right away
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  //init array
  const intersect = [];

  //loop through first num1
  for (let i = 0, len = nums1.length; i < len; i++) {
    //if number is in second array AND not already in our intersection array, push
    //to the intersection array
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
