// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Let's call an array arr a mountain if the following properties hold:

//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... arr[i-1] < arr[i]
//         arr[i] > arr[i+1] > ... > arr[arr.length - 1]

// Given an integer array arr that is guaranteed to be a mountain,
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example:
// Input: arr = [0,1,0]
// Output: 1
//
// Input: arr = [0,2,1,0]
// Output: 1

// Input: arr = [0,10,5,2]
// Output: 1


// --------------------------------------------------------

public class Solution {
    public int PeakIndexInMountainArray(int[] arr) {
        int lo = 0;
        int hi = arr.Length - 1;

        while (lo <= hi){
            int mid = lo + (hi - lo)/2;

            if(arr[mid+1] > arr[mid]){
                lo = mid+1;
            }
            else if(arr[mid-1] > arr[mid]){
                hi = mid-1;
            }
            else {
                return mid;
            }
        }

        return lo;
    }
}
