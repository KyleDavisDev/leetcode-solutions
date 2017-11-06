// Author: Kyle Bonar
// Github: github.com/KyleBonar

// Description:
// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge
// if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a
// character.The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a circle.

// Example:
// Input: "UD"
// Output: true

// Input: "LL"
// Output: false

// --------------------------------------------------------

//We are going to set a variable for horizontal movement, and a variable for
//vertical movement. When the character "U" appears, we will increase the value
//of vert by one. When the character "D" appears, we will decrease the value of
//vert by one. We will do a similar process for the "L" and "R" character w/
//repsect to the horz variable.
// At the end, we will compare the two values along with 0.
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  //init variables
  let vert = 0;
  let horz = 0;

  //split string into array
  moves = moves.split("");
  //loop through array
  for (let i = 0, len = moves.length; i < len; i++) {
    if (moves[i] === "U") {
      //check if up
      vert++;
    } else if (moves[i] === "D") {
      //check down
      vert--;
    } else if (moves[i] === "R") {
      //check right
      horz++;
    } else if (moves[i] === "L") {
      //check left
      horz--;
    }
  }

  //compare and return bool
  return vert === horz && horz === 0;
};
