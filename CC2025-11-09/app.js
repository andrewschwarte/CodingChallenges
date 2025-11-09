// AP-1 --

// dividesSelf

// We'll say that a positive int divides itself if every digit in the number divides into the number evenly. So for example 128 divides itself since 1, 2, and 8 all divide into 128 evenly. We'll say that 0 does not divide into anything evenly, so no number with a 0 digit divides itself. Note: use % to get the rightmost digit, and / to discard the rightmost digit.

// Examples

//     dividesSelf(128) → true
//     dividesSelf(12) → true
//     dividesSelf(120) → false

function dividesSelf(n) {
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    if (digit == 0 || n % digit != 0) return false;
    temp = Math.floor(temp / 10);
  }
  return true;
}
