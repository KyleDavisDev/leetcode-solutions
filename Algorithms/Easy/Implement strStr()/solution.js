// Author: Kyle Bonar
// Github: github.com/KyleBonar

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
  return haystack.indexOf(needle);
};