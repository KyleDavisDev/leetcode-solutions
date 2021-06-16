// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// You're now a baseball game point recorder.
// Given a list of strings, each string can be one of the 4 following types:
//    Integer (one round's score): Directly represents the number of points you get in this round.
//    "+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
//    "D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
//    "C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
//    Each round's operation is permanent and could have an impact on the round before and the round after.
//You need to return the sum of the points you could get in all the rounds.

// Example:
// Input: ["5","2","C","D","+"]
// Output: 30
// Explanation:
// Round 1: You could get 5 points. The sum is: 5.
// Round 2: You could get 2 points. The sum is: 7.
// Operation 1: The round 2's data was invalid. The sum is: 5.
// Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
// Round 4: You could get 5 + 10 = 15 points. The sum is: 30.

// --------------------------------------------------------

/**
 * @param {string[]} ops
 * @return {number}
 */

var calPoints = function(ops) {
  //init variables
  let value,
    sum = 0;

  //loop through ops -- constantly check against length since length could change
  //through the loop
  for (let i = 0; i < ops.length; i++) {
    value = ops[i];

    if (value === "C") {
      //grab opposite of last valid input
      value = ops[i - 1] * -1;

      //remove current index and previous from ops
      ops.splice(i - 1, 2);

      //set i back 2, when loop cycles through to top, 1 will be added back to i
      i -= 2;
    } else if (value === "D") {
      //grab two times last valid input
      value = ops[i - 1] * 2;

      //set the value at this index to be the result of the operation above
      //this is fine because we are not particularly interested in "D" but rather what it represents
      ops[i] = value;
    } else if (value === "+") {
      //grab last two valid inputs
      value = ops[i - 1] + ops[i - 2];

      //set value to result of operation
      //see reasoning above
      ops[i] = value;
    } else {
      //grab value and make into int
      value = parseInt(value);

      //save int over string
      ops[i] = value;
    }

    //add value
    sum += value;
  }

  return sum;
};
