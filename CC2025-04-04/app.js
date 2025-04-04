// Warmup-1 --

// intMax

// Given three int values, a b c, return the largest.

// Examples

//     intMax(1, 2, 3) → 3
//     intMax(1, 3, 2) → 3
//     intMax(3, 2, 1) → 3

function intMax(a, b, c) {
  let arr = [a, b, c];
  arr = arr.sort((a, b) => a - b);
  return arr[2];
}
