// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
// We are going to choose a "candidate" majority element and set up a counter which increases when we encounter the same element and decreases otherwise. When the count reaches 0, we will choose new candidate and start from that point. This will cause only the majority element makes it to the end.
var majorityElement = function(nums) {
  //init length variable and check if it's worth doing algo or not
  const len = nums.length;
  if (len === 1) return nums[0];

  //init candidate and count
  let count = 0,
    candidate;

  //loop through array
  for (let i = 0; i < len; i++) {
    //choose new candidate if count reaches 0
    if (count === 0) candidate = nums[i];

    //after choosing a new candidate and coming across the same element, increase the count
    if (candidate === nums[i]) count++;
    else
      // if not new candidate or same element, decrease count
      count--;
  }

  return candidate;
};
