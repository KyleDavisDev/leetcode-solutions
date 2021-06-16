// Author: Kyle Davis
// Github: github.com/KyleDavisDev

// Description:
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// --------------------------------------------------------

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
  // split str to array of letters
  return str
    .split("")
    .map(letter => {
      //get ascii char code
      const code = letter.charCodeAt(0);
      // if code is in range of uppercase letter, make is lowercase else return letter
      return code > 64 && code < 91 ? String.fromCharCode(code + 32) : letter;
    })
    .join("");
};

// OR if the str has multiple words, the above wont work.

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
  // Change sentence into array of words
  return str
    .split(" ")
    .map(word => {
      // Split word in array of letters
      return word
        .split("")
        .map(letter => {
          // Same as above
          const code = letter.charCodeAt(0);
          return code > 64 && code < 91
            ? String.fromCharCode(code + 32)
            : letter;
        })
        .join("");
    })
    .join(" ");
};
