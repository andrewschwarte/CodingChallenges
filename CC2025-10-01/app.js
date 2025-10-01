// String-3 --

// sameEnds

// Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab".

// Examples

//     sameEnds('abXYab') → true
//     sameEnds('xx') → true
//     sameEnds('xxx') → true

function sameEnds(str) {
  let maxLen = Math.floor(str.length / 2);

  for (let len = 1; len <= maxLen; len++) {
    let start = str.substring(0, len);
    let end = str.substring(str.length - len);
    if (start == end) {
      return true;
    }
  }

  return false;
}
