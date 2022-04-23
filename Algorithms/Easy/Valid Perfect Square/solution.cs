// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.

// Example:
// Input: 16
// Returns: True

// Input: 16
// Returns: True


// --------------------------------------------------------

public class Solution {
    public bool IsPerfectSquare(int num) {
        if (num < 1) return false;
        long lo = 0;
        long hi = num;

        while (lo <= hi){
            long mid = lo + (hi - lo)/2;
            long result = mid * mid;

            if(result > num) hi = mid -1;
            else if (result < num) lo = mid +1;
            else if (result == num) return true;

        }

        return false;
    }
}
