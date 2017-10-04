// Author: Kyle Bonar
// Github: github.com/KyleBonar

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
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let map = new Map();
  let start = 0;
  let longest = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]), start);
    }

    longest = Math.max(longest, i - start + 1);
    map.set(s[i], i + 1);
  }

  return longest;
};
