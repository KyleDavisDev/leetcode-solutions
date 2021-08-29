// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Constraints:
// 1)    1 <= nums1.length, nums2.length <= 1000
// 2)    0 <= nums1[i], nums2[i] <= 1000

// --------------------------------------------------------

public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> intersection = new HashSet<int>();
        
        foreach (var num in nums2) {
            if (set1.Contains(num)) {
                intersection.Add(num);
            }
        }
        
        return intersection.ToArray();
    }
}