// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for
// the multiples of five output “Buzz”. For numbers which are multiples of both
// three and five output “FizzBuzz”.

// Example:
// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

// --------------------------------------------------------

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  //init empty array to hold our answer
  const arr = [];

  //starting at 1, loop until (and including) the input value
  for (let i = 1; i <= n; i++) {
    //check for mod 15 first as it is the combination of 5 and 3, if it isn't, we need to
    //check if mod 5 or mod 3 (the order of these two doesn't matter), and if it is none of those,
    //push straight up string into arr
    if (i % 15 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
