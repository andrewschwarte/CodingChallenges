// String-1 --

// middleThree

// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

//     middleThree('Candy') → and
//     middleThree('and') → and
//     middleThree('solving') → lvi

function middleThree(str) {
  return str.substring(str.length / 2 - 1, str.length / 2 + 2);
}
