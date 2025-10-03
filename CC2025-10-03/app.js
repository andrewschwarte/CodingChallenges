// String-3 --

// maxBlock

// Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.

// Examples

//     maxBlock('hoopla') → 2
//     maxBlock('abbCCCddBBBxx') → 3
//     maxBlock('') → 0

function maxBlock(str) {
  if (str.length == 0) return 0;

  let max = 1;
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      count++;
      if (count > max) max = count;
    } else {
      count = 1;
    }
  }

  return max;
}
