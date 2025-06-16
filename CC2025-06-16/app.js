// String-2 --

// xyzMiddle

// Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

// Examples

//     xyzMiddle('AAxyzBB') → true
//     xyzMiddle('AxyzBB') → true
//     xyzMiddle('AxyzBBB') → false

function xyzMiddle(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    if (str.substring(i, i + 3) == "xyz") {
      let left = i;
      let right = str.length - (i + 3);

      if (Math.abs(left - right) <= 1) {
        return true;
      }
    }
  }
  return false;
}
