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

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let vert = 0;
  let horz = 0;

  moves = moves.split("");
  for (let i = 0, len = moves.length; i < len; i++) {
    if (moves[i] === "U") {
      vert++;
    } else if (moves[i] === "D") {
      vert--;
    } else if (moves[i] === "R") {
      horz++;
    } else if (moves[i] === "L") {
      horz--;
    }
  }

  return vert === horz && horz === 0;
};
