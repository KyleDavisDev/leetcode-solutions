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

//The method used in this solution is to set up a 'range' of possible values.
// '(' will increase lower and upper bound
// ')' will decrease upper and lower bound, but not past zero
// '*' is a wildcard so upper should increase and lower should decrease, but not past zero
var checkValidString = function(s) {
  //check easy stuff immediately
  if (s.length === 0) {
    return true;
  }
  if (s[0] === ")") {
    return false;
  }

  //init lower and upper bound variables
  let low = 0,
    big = 0;
  //loop through s
  for (let i = 0, len = s.length; i < len; i++) {
    
    
    if (s[i] === "(") {//increase upper and lower
      low++;
      big++;
    } else if (s[i] === ")") { //decrease upper and lower but not past zero
      if (low > 0) {
        low--;
      }
      big--;
    } else { //increase upper, descrease lower but not past zero
      if (low > 0) {
        low--;
      }
      big++;
    }

    if (big < 0) { // this will be true if there are too many ')' and no way to pair them up
      return false;
    }
  }

  //with the setup, low should equal zero if all the pairs are met
  return low === 0;
};
