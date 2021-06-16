// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an unsorted array of integers, find the length of longest continuous
// increasing subsequence.

// Example:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length
// is 3. Even though [1,3,5,7] is also an increasing subsequence, it's not a
// continuous one where 5 and 7 are separated by 4.

// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1.

// --------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution is in O(n) time
var findLengthOfLCIS = function(nums) {
  // Get array length and check if valid or not
  const len = nums.length;
  if (len === 0 || len === 1) {
    return len;
  }

  // Loop through to find the number of times, consecutively, an array element is greater than the element right before it
  // This number is not our solution but is close.
  let count = 0;
  let temp = 0;
  for (let i = 1; i < len; i++) {
    // Compare current element with the one prior and adjust "temp" accordingly
    if (nums[i] > nums[i - 1]) {
      temp++;

      // If temp is greater than our longest chain of consecutive numbers, set "count" to "temp"
      if (temp > count) {
        count = temp;
      }
    } else {
      // Reset temp
      temp = 0;
    }
  }

  // Need to increase "count" by one to get the actual number of consecutive numbers
  return ++count;
};
