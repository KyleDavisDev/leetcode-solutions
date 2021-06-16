// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a string containing just the characters '(', ')', '{', '}', '['
// and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are
// all valid but "(]" and "([)]" are not.

// --------------------------------------------------------

//We are going to create a stack and always compare the top item to the
//next bit of the string. If the two can form to create a match, we will
//pop the top item off and go to next string element. At end of day,
//check stack size length to see if all matches were formed.
//We can also cut some of the algo off ahead of time if the string
//element is a closing character that doesn't have a match. I.E. "(})}"
//will return false in the second loop iteration because, no matter what
//is after the '}', we will be unable to find it a match and thus do not
//have to go through the rest of the algo.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //check easy cases first
  if(s.length === 0 || s.length === 1) { return false; }

  //split string to array and create stack
  s = s.split('');
  const stack = [];

  //loop over string
  for(let i = 0, len = s.length; i < len; i++){
    //concat top stack element with incoming bracket
    let last = stack.length-1 >= 0 ? stack[stack.length-1] + s[i] : s[i];
    //check if there is a combination made
    if(last === "{}" || last === "[]" || last === "()"){
        stack.pop();
    } else if(s[i] === "}" || s[i] === "]" || s[i] === ")") {
        //return false if it is a closing
        return false;
    } else {
        //else push to stack
        stack.push(s[i]);
    }

  }

  return stack.length === 0 ? true : false;
};
