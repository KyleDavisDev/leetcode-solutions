// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an array of integers, every element appears twice except for one. Find that single one.
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
//We are going to set up an object which will keep count of the number of times we see a particular number.
//Then we will filter through the object looking for the single key which has a count value of 1.
var singleNumber = function(nums) {
  //check easy edge cases first
  if (nums.length === 1) return nums[0];

  //Init our object
  const set = {};
  //loop thorugh entire nums array
  for (let i = 0, len = nums.length; i < len; i++) {
    //If we haven't seen the number before, add it to our object and set value of 1.
    if (!set[nums[i]]) {
      set[nums[i]] = 1;
    } else if (set[nums[i]] === 1) {
      //else set value to 2
      set[nums[i]] = 2;
    }
  }

  //get object keys
  //filter through keys for a key with the value of 1
  //return that key
  return parseInt(Object.keys(set).filter(key => set[key] === 1)[0]);
};
