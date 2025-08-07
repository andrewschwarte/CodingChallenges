// Logic-2 --

// closeFar

// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples

//     closeFar(1, 2, 10) → true
//     closeFar(1, 2, 3) → false
//     closeFar(4, 1, 3) → true

function closeFar(a, b, c) {
  if (Math.abs(a - b) <= 1 && Math.abs(a - c) > 1 && Math.abs(c - b) > 1)
    return true;
  else if (Math.abs(a - c) <= 1 && Math.abs(a - b) > 1 && Math.abs(b - c) > 1)
    return true;
  else return false;
}
