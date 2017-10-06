// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Example:
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums
// should be [1, 3, 12, 0, 0].

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  //basic nums checking to be sure function was passed legit data
  if (nums === null || nums.length === 0) {
    return;
  }

  //loop through nums
  let count = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    //incriment count every time a zero is found
    if (nums[i] === 0) {
      count++;
    } else {
      //swap non-zero num w/ the first zero in chain before it
      //In example below: the two numbers in quotes are swapped
      //[1,'0',0,'1',0] --> [1,'1',0,'0',0] @ i = 3 && count = 2
      let temp = nums[i];
      nums[i] = nums[i - count];
      nums[i - count] = temp;
    }
  }
};
