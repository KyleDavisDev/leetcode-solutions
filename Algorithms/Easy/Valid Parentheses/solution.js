// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a string containing just the characters '(', ')', '{', '}', '['
// and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are
// all valid but "(]" and "([)]" are not.

// --------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length === 0 || s.length === 1) { return false; }
  
  s = s.split('');
  const stack = [];
  
  for(let i = 0, len = s.length; i < len; i++){
      let last = stack.length-1 >= 0 ? stack[stack.length-1] + s[i] : s[i];
      if(last === "{}" || last === "[]" || last === "()"){
          stack.pop();
      } else {
          stack.push(s[i]);
      }
      
  }

  return stack.length === 0 ? true : false;
};