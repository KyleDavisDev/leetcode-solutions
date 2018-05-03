// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True

// Example:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True

// Note: 
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

// --------------------------------------------------------

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) return true;

  const len = flowerbed.length;
  if (len === 1) {
    return flowerbed[0] === 0;
  }

  let count = 0;

  for (let i = 0; i < len; i++) {
    //edge case left
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count++;
    } else if (i > 0 && flowerbed[i - 1] === 0 && i < len - 1 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) { //center spots
      flowerbed[i] = 1;
      count++;
    } else if (i === len - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) { //edge case right
      flowerbed[i] = 1;
      count++;
    }

  }

  return count >= n;
};