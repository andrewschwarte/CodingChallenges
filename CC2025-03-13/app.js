// Warmup-1 --

// sumDouble

// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Examples

//     sumDouble(1, 2) → 3
//     sumDouble(3, 2) → 5
//     sumDouble(2, 2) → 8

function sumDouble(a, b) {
  if (a === b) return (a + b) * 2;
  else return a + b;
}
