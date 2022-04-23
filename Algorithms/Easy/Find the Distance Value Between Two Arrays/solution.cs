// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// Example:
Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
// Output: 2
// Explanation:
// For arr1[0]=4 we have:
// |4-10|=6 > d=2
// |4-9|=5 > d=2
// |4-1|=3 > d=2
// |4-8|=4 > d=2
// For arr1[1]=5 we have:
// |5-10|=5 > d=2
// |5-9|=4 > d=2
// |5-1|=4 > d=2
// |5-8|=3 > d=2
// For arr1[2]=8 we have:
// |8-10|=2 <= d=2
// |8-9|=1 <= d=2
// |8-1|=7 > d=2
// |8-8|=0 <= d=2
// Output:
// e

// SPECIAL NOTE: Honestly the above description is really bad and the example is even worse.
// Please see here for what the question is ACTUALLY looking for:
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/discuss/1913945/Problem-description-explained-in-simple-English

// --------------------------------------------------------

public class Solution {
    public int FindTheDistanceValue(int[] arr1, int[] arr2, int d) {
        int counter = 0;
        for(int i = 0, len = arr1.Length; i < len; i++) {

            for(int j = 0, len2 = arr2.Length; j < len2; j++){
                if(Math.Abs(arr1[i] - arr2[j]) <= d){
                    counter++;
                    break;
                }

            }
        }

        return arr1.Length - counter;
    }
}
