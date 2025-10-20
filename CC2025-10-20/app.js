// Array-3 --

// squareUp

// Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).

// Examples

//     squareUp(3) → 0,0,1,0,2,1,3,2,1
//     squareUp(2) → 0,1,2,1
//     squareUp(4) → 0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1

function squareUp(n) {
  let result = new Array(n * n).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result[i * n - j - 1] = j + 1;
    }
  }

  return result;
}
