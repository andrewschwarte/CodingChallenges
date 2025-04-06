// Warmup-1 --

// in3050

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// Examples

//     in3050(30, 31) → true
//     in3050(30, 41) → false
//     in3050(40, 50) → true

function in3050(a, b) {
  if (a <= 40 && a >= 30 && b <= 40 && b >= 30) return true;
  else if (a <= 50 && a >= 40 && b <= 50 && b >= 40) return true;
  else return false;
}
