// Author: Kyle Davis
// Github: github.com/KyleDavisDev

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

public class Solution {
  public bool CanPlaceFlowers(int[] flowerbed, int n) {
    if(n==0) return true;

    int length = flowerbed.Length;
    if(length == 1) return flowerbed[0] == 0;            


    int numberOfAvailablePlots = 0;
    for(int i = 0; i < flowerbed.Length; i++){
        
      if(i == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0){
        numberOfAvailablePlots += 1;
        i++;
      }
      else if(i > 0 && i + 1 < length && flowerbed[i-1] == 0 && flowerbed[i] == 0 && flowerbed[i+1] == 0) {
        numberOfAvailablePlots += 1;
        i++;
      }
      else if(i+1 == length && flowerbed[i-1] == 0 && flowerbed[i] == 0) {
        numberOfAvailablePlots += 1;
      }
          
      if(numberOfAvailablePlots == n) return true;
    }

    return false;
  }
}
