// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// --------------------------------------------------------

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // I'm not sure if they were looking for a solution with loops and whatnot but
  // there is a string method made specifically for question....
  return haystack.indexOf(needle);
};
