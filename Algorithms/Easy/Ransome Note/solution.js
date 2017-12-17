// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given an arbitrary ransom note string and another string containing letters from
// all the magazines, write a function that will return true if the ransom note can
// be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// Example:
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// --------------------------------------------------------

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  if (!ransomNote) return true;
  if (ransomNote.length > magazine.length) return false;

  magazine = magazine.split("");

  for (let i = 0, len = ransomNote.length; i < len; i++) {
    const ind = magazine.indexOf(ransomNote[i]);

    if (ind === -1) return false;
    else magazine.splice(ind, 1);
  }

  return true;
};
