// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Implement a MapSum class with insert, and sum methods.
// For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.
// For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

// Example:
// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5

// --------------------------------------------------------

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.hash = {};
};

/**
* @param {string} key
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  this.hash[key] = val;
};

/**
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let sum = 0;
  const keys = Object.keys(this.hash);
  for(let i = 0, len = keys.length; i < len; i++) {
      if(keys[i].indexOf(prefix) === 0){
          sum += this.hash[keys[i]];
      }
  }

  return sum;
};

/**
* Your MapSum object will be instantiated and called as such:
* var obj = Object.create(MapSum).createNew()
* obj.insert(key,val)
* var param_2 = obj.sum(prefix)
*/
