// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.
// --------------------------------------------------------

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => {
  const a1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    a2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    a3 = ["z", "x", "c", "v", "b", "n", "m"],
    results = [];

  for (let i = 0, len = words.length; i < len; i++) {
    let a1Check = (a2Check = a3Check = 0);

    for (let j = 0, leng = words[i].length; j < leng; j++) {
      const letter = words[i].toLowerCase()[j];
      if (a1.includes(letter)) a1Check = 1;
      if (a2.includes(letter)) a2Check = 1;
      if (a3.includes(letter)) a3Check = 1;
      if (a1Check + a2Check + a3Check > 1) break;
    }
    if (a1Check + a2Check + a3Check === 1) results.push(words[i]);
  }
  return results;
};
