// Logic-1 --

// less20

// Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

// Examples

//     less20(18) → true
//     less20(19) → true
//     less20(20) → false

function less20(n) {
  if (n % 20 == 18 || n % 20 == 19) return true;
  else return false;
}
