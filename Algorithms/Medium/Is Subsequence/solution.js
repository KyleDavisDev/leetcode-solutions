// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a string s and a string t, check if s is subsequence of t.
// You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).
// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// s = "abc", t = "ahbgdc"
// Return true.

// Example 2:
// s = "axc", t = "ahbgdc"
// Return false.

// --------------------------------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (!s) return true;
  if (!s || !t || s.length > t.length) return false;

  const sLength = s.length;
  let sIndex = 0;

  for (let i = 0, len = t.length; i < len; i++) {
    if (s[sIndex] === t[i]) {
      sIndex++;
    }
    if (sIndex === sLength) {
      return true;
    }
  }

  return false;
};
