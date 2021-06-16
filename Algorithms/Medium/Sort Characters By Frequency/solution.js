// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:
// Input:
// "tree"
// Output:
// "eert"
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"
// Output:
// "cccaaa"
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input:
// "Aabb"
// Output:
// "bbAa"
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
//We are going count the number of times each letter appears in the string
//Sort the number of times in desc order
//Construct string based on letter and frequency
var frequencySort = function(s) {
  //empty object to hold letters and their respective counts
  let obj = {};

  //split string to array so we can use .forEach method
  //if letter exists in object, incriment count by 1, else set value to 1.
  s.split("").forEach(v => (obj[v] ? obj[v]++ : (obj[v] = 1)));

  //sort keys by letter frequency
  //construct string from letter and frequency
  return Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .reduce((accum, cur) => {
      return accum + cur.repeat(obj[cur]);
    }, "");
};
