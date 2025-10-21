// Array-3 --

// seriesUp

// Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.

// Examples

//     seriesUp(3) → 1,1,2,1,2,3
//     seriesUp(4) → 1,1,2,1,2,3,1,2,3,4
//     seriesUp(2) → 1,1,2

function seriesUp(n) {
  let length = (n * (n + 1)) / 2;
  let result = new Array(length);
  let index = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result[index] = j;
      index++;
    }
  }

  return result;
}
