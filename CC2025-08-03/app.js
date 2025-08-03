// Logic-2 --

// loneSum

// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

// Examples

//     loneSum(1, 2, 3) → 6
//     loneSum(3, 2, 3) → 2
//     loneSum(3, 3, 3) → 0

function loneSum(a, b, c) {
  if (a == b && a == c) return 0;
  else if (a == b) return c;
  else if (b == c) return a;
  else if (a == c) return b;
  else if (a == b && a == c) return 0;
  else return a + b + c;
}
