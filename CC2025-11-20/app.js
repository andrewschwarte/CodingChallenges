// AP-1 --

// commonTwo

// Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.

// Examples

//     commonTwo(['a', 'c', 'x'], ['b', 'c', 'd', 'x']) → 2
//     commonTwo(['a', 'c', 'x'], ['a', 'b', 'c', 'x', 'z']) → 3
//     commonTwo(['a', 'b', 'c'], ['a', 'b', 'c']) → 3

function commonTwo(a, b) {
  let i = 0,
    j = 0;
  let count = 0;
  let prev = null;

  while (i < a.length && j < b.length) {
    if (a[i] === prev) {
      i++;
      continue;
    }
    if (a[i] < b[j]) i++;
    else if (a[i] > b[j]) j++;
    else {
      count++;
      prev = a[i];
      i++;
      j++;
    }
  }

  return count;
}
