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
//We are going to check each character in ransomeNote string against magazine array to see if the charactor exists inside of the array.
//If the charactor does not, we can stop right there and return false. If it does, we should remove that array element and continue checking.
const canConstruct = (ransomNote, magazine) => {
  //check edge cases first
  if (!ransomNote) return true;
  if (ransomNote.length > magazine.length) return false;

  //split string to array so we have access to .splice method
  magazine = magazine.split("");

  //loop through ransomeNote
  for (let i = 0, len = ransomNote.length; i < len; i++) {
    //get the index of where the character is inside of array
    const ind = magazine.indexOf(ransomNote[i]);

    //ind === -1 if the character is NOT found in array
    if (ind === -1) return false;
    else magazine.splice(ind, 1); //remove from array
  }

  return true;
};
