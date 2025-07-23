// Logic-1 --

// inOrderEqual

// Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

// Examples

//     inOrderEqual(2, 5, 11, false) → true
//     inOrderEqual(5, 7, 6, false) → false
//     inOrderEqual(5, 5, 7, true) → true

function inOrderEqual(a, b, c, equalOk) {
  if (equalOk == true && a <= b && b <= c) return true;
  else if (a < b && b < c) return true;
  else return false;
}
