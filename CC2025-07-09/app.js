// Logic-1 --

// love6

// The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

// Examples

//     love6(6, 4) → true
//     love6(4, 5) → false
//     love6(1, 5) → true

function love6(a, b) {
  let sum = a + b;
  let difference = Math.abs(a - b);
  if (a == 6 || b == 6) return true;
  if (sum == 6 || difference == 6) return true;
  else return false;
}
