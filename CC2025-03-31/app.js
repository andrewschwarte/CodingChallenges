// Warmup-1 --

// loneTeen

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

// Examples

//     loneTeen(13, 99) → true
//     loneTeen(21, 19) → true
//     loneTeen(13, 13) → false

function loneTeen(a, b) {
  if (a >= 13 && a <= 19 && (b <= 12 || b >= 20)) return true;
  else if (b >= 13 && b <= 19 && (a <= 12 || a >= 20)) return true;
  else return false;
}
