// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.

// Example:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// --------------------------------------------------------

// Stack solution
public class Solution {
	public int Search(int[] nums, int target) {
		int leftInd = 0;
		int rightInd = nums.Length - 1;
        
		while(leftInd <= rightInd){
			int midInd = (rightInd + leftInd) / 2;
            
			if(nums[midInd] > target) { 
				rightInd = midInd - 1;
			}
			else if(nums[midInd] < target) {
				leftInd = midInd + 1;
			}
			else if(nums[midInd] == target){
				return midInd;
			} 
		}
        
		return -1;
	}
}