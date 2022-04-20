// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

//     -1: Your guess is higher than the number I picked (i.e. num > pick).
//     1: Your guess is lower than the number I picked (i.e. num < pick).
//     0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.

// Example:
// Input: n = 10, pick = 6
// Output: 6
//
// Input: n = 1, pick = 1
// Output: 1
//
// Input: n = 2, pick = 1
// Output: 1


// --------------------------------------------------------

public class Solution : GuessGame {
    public int GuessNumber(int n) {
        int leftInd = 1;
        int rightInd = n;

        while(leftInd < rightInd){
            int mid = leftInd + (rightInd - leftInd) / 2;

            int val = guess(mid);

            if(val == 0) return mid;
            if(val == -1) rightInd = mid - 1;
            else if(val == 1) leftInd = mid + 1;

        }

        return leftInd;
    }
}
