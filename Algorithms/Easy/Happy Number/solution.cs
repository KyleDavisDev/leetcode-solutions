// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// --------------------------------------------------------

public class Solution {
    public bool IsHappy(int n) {
        List<int> history = new List<int>();
        history.Add(n);
        
        while(n != 1){
            int sumOfSquares = 0;
            string tmpNum = n.ToString();
            
            for(int i = 0; i < tmpNum.Length; i++){
                int single = Int32.Parse(tmpNum[i].ToString());
                sumOfSquares += single * single;
            }
            if(sumOfSquares == 1) return true;
            if(history.Contains(sumOfSquares)) return false;
            
            n = sumOfSquares;
            history.Add(n);            
        }
        
        
        return true;
    }
}