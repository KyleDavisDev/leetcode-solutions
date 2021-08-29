// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// --------------------------------------------------------

public class Solution {
    public int StrStr(string haystack, string needle) {
        if(needle == "") return 0;
        if(haystack == "") return -1;
        if(needle.Length > haystack.Length) return -1;
        if(needle == haystack) return 0;
        
        int nLength = needle.Length;
        int hLength = haystack.Length;
        
        for(int i = 0; i <= hLength - nLength; i++)
        {            
            int j = 0;
            for(; j < nLength; j++)
            {                
                if(haystack[i+j] == needle[j]) continue;
                break;
            }
            if(j == nLength) return i;
        }
        return -1;        
    }
}