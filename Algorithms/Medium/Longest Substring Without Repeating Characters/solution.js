// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a string, find the length of the longest substring without repeating characters.

// Example:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  //return simple strings immediately
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  //init variables
  let map = new Map();
  let start = 0;
  let longest = 0;
  const len = s.length;

  //loop through string
  for (let i = 0; i < len; i++) {

    //if letter found in map, update start to be that position
    //this will allow us to calc the length of the new set of unique charactors
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]), start);
    }

    //get longest by comparing to self vs number of indexes between i and start
    longest = Math.max(longest, i - start + 1);

    //update/assign value of map key
    map.set(s[i], i + 1);
  }

  return longest;
};
