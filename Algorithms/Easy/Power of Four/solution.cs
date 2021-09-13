// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example:
// Given num = 16, return true. Given num = 5, return false.

// --------------------------------------------------------
public class Solution {
    public bool IsPowerOfFour(int n) {
        if(n < 1) return false;
        while (n > 1) {
            if(n % 4 != 0) return false;
            n /= 4;
        }
        
        return true;
    }
}