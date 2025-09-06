// Array-1 --

// front11

// Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

// Examples

//     front11([1, 2, 3], [7, 9, 8]) → 1,7
//     front11([1], [2]) → 1,2
//     front11([1, 7], []) → 1

function front11(a, b) {
  if (b.length == 0 && a.length == 0) return [];
  else if (a.length == 0) return [b[0]];
  else if (b.length == 0) return [a[0]];
  else return [a[0], b[0]];
}
