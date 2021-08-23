﻿// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.

// Example:
// Input:
// s = "abcd"
// t = "abcde"  

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

// --------------------------------------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
public class Solution {
    public char FindTheDifference(string s, string t) {
        for(int i = 0; i < t.Length; i++){
            if(s.IndexOf(t[i]) == -1 ) return t[i];
        
            s = s.Remove(s.IndexOf(t[i]), 1);
        }
    
        return t[0];
    
    }
}