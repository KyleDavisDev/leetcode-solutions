// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4


// --------------------------------------------------------

public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int lo = 0;
        int hi = nums.Length - 1;

        while (lo <= hi)
        {
            int mid = lo + (hi - lo)/2;

            if(target == nums[mid]) return mid;
            else if(target < nums[mid]) hi = mid - 1;
            else if(target > nums[mid]) lo = mid + 1;
        }

        return lo;
    }
}
