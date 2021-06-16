// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a string, you need to reverse the order of characters in each word
// within a sentence while still preserving whitespace and initial word
// order.

// Example:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  //turn string to array by splitting between white spaces
  //iterate through each element
  ////turn string to array by splitting between characters
  ////reverse characters
  ////join characters together
  //join array together by adding back spaces
  return s
    .split(" ")
    .map(val => {
      return val
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
};
