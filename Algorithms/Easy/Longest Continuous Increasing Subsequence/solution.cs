// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an unsorted array of integers, find the length of longest continuous
// increasing subsequence.

// Example:
// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its length
// is 3. Even though [1,3,5,7] is also an increasing subsequence, it's not a
// continuous one where 5 and 7 are separated by 4.

// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length is 1.

// --------------------------------------------------------
public class Solution {
    public int FindLengthOfLCIS(int[] nums) {
        if(nums.Length == 1) return 1;
        
        int count = 1;
        int longestStreak = 1;
        
        for(int i = 1; i < nums.Length; i++)
        {
            if(nums[i] > nums[i-1])
            {
                count++;                
            }
            else if(nums[i] <= nums[i-1])
            {
                count = 1;
            }
            
            if(count > longestStreak){
                longestStreak = count;
            }          
        }
        
        return longestStreak;
    }
}