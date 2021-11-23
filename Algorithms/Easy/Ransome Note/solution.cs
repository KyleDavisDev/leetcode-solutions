// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given an arbitrary ransom note string and another string containing letters from
// all the magazines, write a function that will return true if the ransom note can
// be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// Example:
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

// --------------------------------------------------------
public class Solution {
    public bool CanConstruct(string ransomNote, string magazine) {
        if (magazine == null) return false; 
        if (ransomNote == magazine) return true; 
        
        foreach(char letter in magazine){
            int index = ransomNote.IndexOf(letter);
            if(index >= 0) ransomNote = ransomNote.Remove(index, 1);            
            
            if(ransomNote.Length == 0) return true;
        }
        
        return false;
    }
}