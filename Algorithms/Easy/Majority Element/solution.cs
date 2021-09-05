// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// --------------------------------------------------------

public class Solution {
    public int MajorityElement(int[] nums) {
        int counter = 0;
        int mostFrequentVal = nums[0];

        for(int i = 0; i < nums.Length; i++)
        {
            if (mostFrequentVal == nums[i])
            {
                counter++;
            }
            else if (counter > 0)
            {
                counter--;
            }
            else
            {
                mostFrequentVal = nums[i];
                counter++;
            }
        }

        return mostFrequentVal;
    }
}