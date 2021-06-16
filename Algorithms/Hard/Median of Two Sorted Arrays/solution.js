// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

// --------------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] === undefined) {
      arr.push(nums2[j++]);
    } else if (nums2[j] === undefined) {
      arr.push(nums1[i++]);
    } else if (nums1[i] > nums2[j]) {
      arr.push(nums2[j++]);
    } else {
      arr.push(nums1[i++]);
    }
  }

  const len = arr.length;
  if (len % 2 !== 0) {
    return arr[(len - 1) / 2];
  }

  return (arr[len / 2 - 1] + arr[len / 2]) / 2;
};
