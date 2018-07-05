// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example:
// Input: [1,3,4,2,2]
// Output: 2

// Example:
// Input: [3,1,3,4,2]
// Output: 3

// Note:
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.


// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  // initialize set bc we don't need a value assigned with each key
  const set = new Set();

  for (let i = 0, len = nums.length; i < len; i++) {
    // If the number isn't in the set, push it into the set
    if (!set.has(nums[i])) set.add(nums[i]);
    // Else return the first duplicated number
    else return nums[i];
  }
};