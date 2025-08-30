// Array-1 --

// plusTwo

// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

// Examples

//     plusTwo([1, 2], [3, 4]) → 1,2,3,4
//     plusTwo([4, 4], [2, 2]) → 4,4,2,2
//     plusTwo([9, 2], [3, 4]) → 9,2,3,4

function plusTwo(a, b) {
  let result = [];
  for (let i = 0; i < 2; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < 2; i++) {
    result.push(b[i]);
  }
  return result;
}
