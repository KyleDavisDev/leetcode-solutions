// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a string containing only three types of characters: '(', ')' and '*',
// write a function to check whether this string is valid. We define the
// validity of a string by these rules:
// 1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// 2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
// 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// 4. '*' could be treated as a single right parenthesis ')' or a single left
//    parenthesis '(' or an empty string.
// 5. An empty string is also valid.

// Example:
// Input: "()"
// Output: True

// Input: "(*)"
// Output: True

// Input: "(*))"
// Output: True

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
  if (s.length === 0) {
    return true;
  }
  if (s[0] === ")") {
    return false;
  }

  let low = 0,
    big = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(") {
      low++;
      big++;
    } else if (s[i] === ")") {
      if (low > 0) {
        low--;
      }
      big--;
    } else {
      if (low > 0) {
        low--;
      }
      big++;
    }

    if (big < 0) {
      return false;
    }
  }

  return low === 0;
};
