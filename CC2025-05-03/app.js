// String-1 --

// extraEnd

// Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

// Examples

//     extraEnd('Hello') → lololo
//     extraEnd('ab') → ababab
//     extraEnd('Hi') → HiHiHi

function extraEnd(str) {
  let lastTwo = str.substring(str.length - 2, str.length);
  return lastTwo + lastTwo + lastTwo;
}
