// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Constraints:
// 1) row == grid.length
// 2) col == grid[i].length
// 3) 1 <= row, col <= 100
// 4) grid[i][j] is 0 or 1.

// Example:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16

// --------------------------------------------------------

/**
 * @param {number[][]} grid
 * @return {number}
 */
public class Solution {
    public int IslandPerimeter(int[][] grid) {
        int sum = 0;
        int maxHeight = grid.Length;
        int maxWidth = grid[0].Length;
        
        for(int row = 0; row < maxHeight; row++){
            for(int col = 0; col < maxWidth; col++){
                if(grid[row][col] != 1) continue;
                
                // Check left
                if((col-1 >= 0 && grid[row][col-1] == 0) || col-1 < 0) sum++;
                
                // Check right
                if((col+1 < maxWidth && grid[row][col+1] == 0) || col+1 >= maxWidth) sum++;
                
                // Check bottom
                if((row+1 < maxHeight && grid[row+1][col] == 0) || row+1 >= maxHeight) sum++;
                
                // Check top
                if((row-1 >= 0 && grid[row-1][col] == 0) || row-1 < 0) sum++;
            }
            
        }
        
        return sum;
    }
}