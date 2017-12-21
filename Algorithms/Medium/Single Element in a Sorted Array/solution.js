// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// Note: Your solution should run in O(log n) time and O(1) space.

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
//We are going to compare each element in nums array to it's direct neighbor and find the one that is not similiar to it left neighbor AND right.
const singleNonDuplicate = nums => {
  //check easy edge cases
  if (!nums) return 0;
  if (nums.length === 1) return nums[0];

  //loop through nums
  for (let i = 0, len = nums.length; i < len; i++) {
    //check to make sure the element matches at least one of it's neighbors or return the number itself.
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};

//If O(1) space is not of concern, we could also use my solution to the "Single Number" problem

var singleNumber = function(nums) {
  if (nums.length === 1) return nums[0];

  const set = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!set[nums[i]]) {
      set[nums[i]] = 1;
    } else if (set[nums[i]] === 1) {
      set[nums[i]] = 2;
    }
  }
  return parseInt(Object.keys(set).filter(key => set[key] === 1)[0]);
};
