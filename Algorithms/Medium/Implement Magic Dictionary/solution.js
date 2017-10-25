// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Implement a magic directory with buildDict, and search methods.
// For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.
// For the method search, you'll be given a word, and judge whether if you modify exactly one
// character into another character in this word, the modified word is in the dictionary you
// just built.

// Example:
// Input: buildDict(["hello", "leetcode"]), Output: Null
// Input: search("hello"), Output: False
// Input: search("hhllo"), Output: True
// Input: search("hell"), Output: False
// Input: search("leetcoded"), Output: False

// Note:
// You may assume that all the inputs are consist of lowercase letters a-z.
// For contest purpose, the test data is rather small by now. You could think
// about highly efficient algorithm after the contest.
// Please remember to RESET your class variables declared in class MagicDictionary,
// as static/class variables are persisted across multiple test cases. Please see
// here for more details.

// --------------------------------------------------------

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.set = [];
};

/**
* Build a dictionary through a list of words 
* @param {string[]} dict
* @return {void}
*/
MagicDictionary.prototype.buildDict = function(dict) {
  for (let i = 0, len = dict.length; i < len; i++) {
    this.set[dict[i].length] = (this.set[dict[i].length] || []).concat(dict[i]);
  }
};

/**
* Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
* @param {string} word
* @return {boolean}
*/
MagicDictionary.prototype.search = function(word) {
  return (
    this.set[word.length] !== undefined &&
    this.set[word.length].some(ele => {
      let unMatchingLetters = 0;

      for (let i = 0, len = ele.length; i < len; i++) {
        if (word[i] !== ele[i]) {
          unMatchingLetters++;

          if (unMatchingLetters === 2) {
            return false;
          }
        }
      }
      return unMatchingLetters === 1;
    })
  );
};

/** 
* Your MagicDictionary object will be instantiated and called as such:
* var obj = Object.create(MagicDictionary).createNew()
* obj.buildDict(dict)
* var param_2 = obj.search(word)
*/
