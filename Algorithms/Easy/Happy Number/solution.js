// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// --------------------------------------------------------

/**
 * @param {number} n
 * @return {boolean}
 */
//General solution: Find the sum of the squared individual numbers, add that number to set, rinse/repeat.
//We can stop if that number is 1 or found already in the set.
const isHappy = n => {
  //set will hold all of the sums we compute
  const set = new Set();
  //add our starting number to begin with
  set.add(n);

  //loop over n
  while (n !== 1) {
    //get sum of squares
    n = squareSum(n);

    //add to set or return false
    if (set.has(n)) return false;
    else set.add(n);
  }
  return true;
};

//this is set of squares so that we do not need to computer the square of a number ever single time
//having the results pre-saved should save us computation time
const dict = {
  1: 1,
  2: 4,
  3: 9,
  4: 16,
  5: 25,
  6: 36,
  7: 49,
  8: 64,
  9: 81,
  0: 0
};
const squareSum = n => {
  let sum = 0,
    digit;
  while (n > 0) {
    //digit will be assigned right-most value in n.
    digit = n % 10;
    //add the squared digit value to sum
    sum = sum + dict[digit];
    //remove the right-most digit from n and shift all other digits one space
    //Ex if n is 154:  n = (154 - 4) / 10
    //i.e. n = 15
    n = (n - digit) / 10;
  }
  return sum;
};
