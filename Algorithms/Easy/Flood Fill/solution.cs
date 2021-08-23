// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
// At the end, return the modified image.

// Example:
// Input:
// image = [
//  [1,1,1],
//  [1,1,0],
//  [1,0,1]
// ]
// sr = 1, sc = 1, newColor = 2
// Output: [
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
// ]
// Explanation:
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.

// Note:
// The length of image and image[0] will be in the range [1, 50].
// The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

// --------------------------------------------------------


public class Solution {
    int oldColor = 0;
    int newColor = 0;
    int maxHeight = 0;
    int maxWidth = 0;
        
    public int[][] FloodFill(int[][] image, int sr, int sc, int newColor) {
        maxHeight = image.Length;
        maxWidth = image[0].Length;
        oldColor = image[sr][sc];
        this.newColor = newColor;
        if(oldColor == newColor) return image;
        
        image[sr][sc] = newColor;
        image = CheckNeighbors(sr, sc, image);
        
        return image;
    }
    
    public int[][] CheckNeighbors(int targetRow, int targetCol, int[][] image){            
        // Check left
        if(targetCol - 1 >= 0 && image[targetRow][targetCol-1] == oldColor){
            image[targetRow][targetCol-1] = newColor;
            image = CheckNeighbors(targetRow, targetCol-1, image);
        }

        // Check Top
        if(targetRow - 1 >= 0 && image[targetRow-1][targetCol] == oldColor) {
            image[targetRow-1][targetCol] = newColor;
            image = CheckNeighbors(targetRow-1, targetCol, image);
        }

        // Check Right
        if(targetCol + 1 < maxWidth && image[targetRow][targetCol+1] == oldColor) {
            image[targetRow][targetCol+1] = newColor;
            image = CheckNeighbors(targetRow, targetCol+1, image);
        }

        // Check Bottom
        if(targetRow + 1 < maxHeight && image[targetRow+1][targetCol] == oldColor) {
            image[targetRow+1][targetCol] = newColor;
            image = CheckNeighbors(targetRow+1, targetCol, image);
        }
        
        return image;
    }
}