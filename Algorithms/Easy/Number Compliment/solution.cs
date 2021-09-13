// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a positive integer, output its complement number. The
// complement strategy is to flip the bits of its binary
// representation.

// Note:
// The given integer is guaranteed to fit within the range of a
// 32-bit signed integer. You could assume no leading zero bit
// in the integer’s binary representation.

// Example:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101
// (no leading zero bits), and its complement is 010. So
// you need to output 2.

// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1
// (no leading zero bits), and its complement is 0. So
// you need to output 0.

// --------------------------------------------------------
public class Solution {
    public int FindComplement(int num) {
        string bin = Convert.ToString(num, 2);
        string compliment = String.Empty;
        foreach(char letter in bin){
            if(letter == '1') compliment += "0";
            else compliment += "1";
        }
        
        return Convert.ToInt32(compliment, 2);
    }
}