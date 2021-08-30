// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// --------------------------------------------------------

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        Dictionary<char, int> results = new Dictionary<char, int>();
        
        for(int i = 0; i < jewels.Length; i++) {
            if(!results.ContainsKey(jewels[i])) results.Add(jewels[i], 0);
        }
        
        for(int i = 0; i < stones.Length; i++) {
            if(results.ContainsKey(stones[i])) {
                results.TryGetValue(stones[i], out int currentCount); 
                results[stones[i]] = currentCount + 1;
            }
        }
               
        int sum = 0;
        foreach(KeyValuePair<char, int> entry in results) {
            sum += entry.Value;
        }
        return sum;
    }
}