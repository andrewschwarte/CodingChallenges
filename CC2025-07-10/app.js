// Logic-1 --

// in1To10

// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

// Examples

//     in1To10(5, false) → true
//     in1To10(11, false) → false
//     in1To10(11, true) → true

function in1To10(n, outsideMode) {
  if (outsideMode)
    if (n <= 1 || n >= 10) return true;
    else return false;
  if (n >= 1 && n <= 10) return true;
  else return false;
}
