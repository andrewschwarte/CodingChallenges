// AP-1 --

// wordsFront

// Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.

// Examples

//     wordsFront(['a', 'b', 'c', 'd'], 1) → a
//     wordsFront(['a', 'b', 'c', 'd'], 2) → a,b
//     wordsFront(['a', 'b', 'c', 'd'], 3) → a,b,c

function wordsFront(words, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(words[i]);
  }
  return result;
}
