// Author: Kyle Bonar
// Github: github.com/KyleBonar

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
var findLengthOfLCIS = function(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) {
    return len;
  }

  let count = 0;
  let temp = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      temp++;

      if (temp > count) {
        count = temp;
      }
    } else {
      temp = 0;
    }
  }

  return ++count;
};
