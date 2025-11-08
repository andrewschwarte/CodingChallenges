// AP-1 --

// hasOne

// Given a positive int n, return true if it contains a 1 digit. Note: use % to get the rightmost digit, and / to discard the rightmost digit.

// Examples

//     hasOne(10) → true
//     hasOne(22) → false
//     hasOne(220) → false

function hasOne(n) {
  while (n > 0) {
    if (n % 10 == 1) return true;
    n = Math.floor(n / 10);
  }
  return false;
}
