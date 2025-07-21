// Logic-1 --

// twoAsOne

// Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

// Examples

//     twoAsOne(1, 2, 3) → true
//     twoAsOne(3, 1, 2) → true
//     twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c) {
  let arr = [a, b, c];
  let sorted = arr.sort((a, b) => a - b);

  if (Math.abs(sorted[0]) + Math.abs(sorted[1]) == sorted[2]) return true;
  else return false;
}
