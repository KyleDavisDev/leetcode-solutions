// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// --------------------------------------------------------

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//For this solution, we will go through array and compare value to it's righthand neighbor. We will continue comparing to neighbors so long as the right-hand value is less than the initial value. Once this condition is not met, we will save the number of successful comparisons to an array.
var dailyTemperatures = function(temp) {
  //count will be our counter which incriments every successful comparison
  //arr will hold our results
  let count;
  const arr = [];
  //loop through temp array
  for (let i = 0, len = temp.length; i < len; i++) {
    //reset count
    count = 1;
    //loop through right-hand side of the temp array
    for (let j = i + 1; j < len; j++) {
      //incriment count if current value is greater than comparison value or else assign the current count variable to our results array and break from loop.
      if (temp[i] >= temp[j]) {
        count++;
      } else {
        arr[i] = count;
        break;
      }
    }

    //Assign 0 as value if no value got assigned from above.
    //This will be the case, like in the given example, if there are no values greater than the current.
    if (!arr[i]) arr[i] = 0;
  }
  return arr;
};
