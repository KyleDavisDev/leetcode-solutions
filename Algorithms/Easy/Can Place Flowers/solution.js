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
 * @description Loop through flowerbed array and check for conditions which would allow a flower to be planted, incriment counter along the way, compare counter to initial condition at the end
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  // Guard clause. If n = 0, we are done.
  if (n === 0) return true;

  // Grab length once, we may need to use later
  const len = flowerbed.length;

  // Guard clause. If the flowerpot has only one spot, and n > 0 (which we know is the case if we are here), we can quickly check if the spot is filled or not and return bool
  if (len === 1) {
    return flowerbed[0] === 0;
  }

  // Initialize our comparison variable
  let count = 0;

  // Loop through flowerbed. If we find a spot, be sure to actually 'plant' a flower for future loops to be able to refer to
  for (let i = 0; i < len; i++) {
    //edge case left
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count++;
    } else if (i > 0 && flowerbed[i - 1] === 0 && i < len - 1 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) { //center spots
      flowerbed[i] = 1;
      count++;
    } else if (i === len - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) { //edge case right
      flowerbed[i] = 1; // Could remove this since we are already at the end of our loop but it looks good for consistancy.
      count++;
    }

    //check to see if we can leave early
    if (count === n) break;
  }

  // Since we are possibly breaking the loop early, we can confidently compare whether the two values are exactly equal or not.
  return count === n;
};