// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
  if (s.length == 1 || s.length == 0) {
    return s;
  }

  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str += s.charAt(i);
  }
  return str;
};

// OR

var reverseString = function(s) {
  return s
    .split("")
    .reverse()
    .join("");
};
