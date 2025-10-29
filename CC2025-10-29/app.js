// Recursion-1 --

// sumDigits1

// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 removes the rightmost digit [Math.floor(126 / 10) is 12].

// Examples

//     sumDigits1(126) → 9
//     sumDigits1(49) → 13
//     sumDigits1(12) → 3

function sumDigits1(n) {
  if (n == 0) return 0;
  return (n % 10) + sumDigits1(Math.floor(n / 10));
}
