// Logic-1 --

// more20

// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples

//     more20(20) → false
//     more20(21) → true
//     more20(22) → true

function more20(n) {
  if (n % 20 == 1 || n % 20 == 2) return true;
  else return false;
}
