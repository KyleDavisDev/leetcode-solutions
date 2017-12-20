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
var dailyTemperatures = function (temp) {
  let count;
  const arr = [];
  for (let i = 0, len = temp.length; i < len; i++) {
    count = 1;
    for (let j = i + 1; j < len; j++) {
      if (temp[i] >= temp[j]) {
        count++;
      } else {
        arr[i] = count;
        break;
      }
    }

    if (!arr[i]) arr[i] = 0;
  }
  return arr;
};