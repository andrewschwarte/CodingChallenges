// String-1 --

// middleTwo

// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

//     middleTwo('string') →
//     middleTwo('code') →
//     middleTwo('Practice') →

function middleTwo(str) {
  return str.substring(str.length / 2 - 1, str.length / 2 + 1);
}
