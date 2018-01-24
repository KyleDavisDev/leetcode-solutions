// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Shuffle a set of numbers without duplicates.

// Example:
// Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

// --------------------------------------------------------

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  //assign nums or set to empty array
  this.nums = nums || [];
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function () {
  //return original input or [] (if input was falsy)
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/

Solution.prototype.shuffle = function () {
  //check to make sure there are actual numbers inside nums property
  if (this.nums.length === 0) return this.nums;

  //make duplicate of array (arr has a seperate pointer from this.nums as this point)
  const arr = this.nums.slice();
  //get length and set temp variables
  var m = arr.length, t, i;

  //The following is the Fisher-Yates randomize algorithm. This is NOT my algorithm but rather a javascript implimentation of said algorithm
  // While there remain elements to shuffle…
  while (m > 0) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}

/** 
* Your Solution object will be instantiated and called as such:
* var obj = Object.create(Solution).createNew(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/