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
  //if string has length 0 or 1, we can send back result quickly 
  if (s.length == 1 || s.length == 0) {
    return s;
  }

  //concat values onto str in reverse order
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str += s.charAt(i);
  }

  //return result
  return str;
};

// OR

var reverseString = function(s) {
  //method chaining is fun but is not typically as efficient
  return s
    .split("")
    .reverse()
    .join("");
};
