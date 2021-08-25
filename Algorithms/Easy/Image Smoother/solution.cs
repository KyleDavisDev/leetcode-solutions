// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Given a 2D integer matrix M representing the gray scale of an image, you need to
// design a smoother to make the gray scale of each cell becomes the average gray
// scale (rounding down) of all the 8 surrounding cells and itself. If a cell has
// less than 8 surrounding cells, then use as many as you can.

// Example:
// Input:
// [[1,1,1],
// [1,0,1],
// [1,1,1]]
// Output:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0

// --------------------------------------------------------

public class Solution {
    int _maxWidth = 0;
    int _maxHeight = 0;
    
    public int[][] ImageSmoother(int[][] img) {
        _maxWidth = img[0].Length;
        _maxHeight = img.Length;
        
        int[][] smoothedImg = new int[_maxHeight][];
        for (int i = 0; i < _maxHeight; i++)
        {
            smoothedImg[i] = new int[_maxWidth];
        }
        
        for(int i = 0; i < _maxHeight; i++){
            for(int j = 0; j < _maxWidth; j++){
                smoothedImg[i][j] =  SmoothedValue(i, j, img);                    
            }
        }
               
        
        return smoothedImg;
    }
    
    public int SmoothedValue(int row, int column, int[][] img){
        
        int sum = 0;
        int count = 0;
        
        // top left 
        if(row-1 >= 0 && column-1 >= 0){
            sum += img[row-1][column-1];
            count++;
        }
        
        // top 
        if(row-1 >= 0){
            sum += img[row-1][column];
            count++;
        }
        
        // top right 
        if(row-1 >= 0 && column+1 < _maxWidth ){
            sum += img[row-1][column+1];
            count++;
        }
        
        // left
        if(column-1 >= 0){
            sum += img[row][column-1];
            count++;
        }
        
        // center        
        sum += img[row][column];
        count++;
        
        // right
        if(column+1 < _maxWidth){
            sum += img[row][column+1];
            count++;
        }
        
        // bottom left
        if(row+1 < _maxHeight && column-1 >= 0){
            sum += img[row+1][column-1];
            count++;
        }
        
        // bottom
        if(row+1 < _maxHeight){
            sum += img[row+1][column];
            count++;
        }
        
        // bottom right
        if(row+1 < _maxHeight && column+1 < _maxWidth){
            sum += img[row+1][column+1];
            count++;
        }
        
        return Convert.ToInt32(Math.Floor((decimal)(sum/count)));     
        
    }
}