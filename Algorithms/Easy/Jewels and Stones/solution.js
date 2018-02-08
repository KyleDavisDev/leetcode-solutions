// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// --------------------------------------------------------

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//We are going to place all of our individual Jewels into an object with an initial value of 0
//every time, while looping through S, we find a Jewel, incriment the object value by 1.
//need to check against 'undefined' because the initial state of 0 is considered false
//finally, we will loop through object and add all values together
var numJewelsInStones = function(J, S) {
  //create our object
  const set = {};
  //loop through J
  for (let i = 0, len = J.length; i < len; i++) {
    if (!set[J[i]]) set[J[i]] = 0; //place jewel into object
  }

  //loop through S
  for (let i = 0, len = S.length; i < len; i++) {
    if (set[S[i]] !== undefined) set[S[i]]++; //incriment object value
  }

  //get object keys
  //loop through object and add values together.
  return Object.keys(set).reduce((accum, cur) => (accum += set[cur]), 0);
};
