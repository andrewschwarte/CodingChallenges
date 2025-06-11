// String-2 --

// mixString

// Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

// Examples

//     mixString('abc', 'xyz') → axbycz
//     mixString('Hi', 'There') → HTihere
//     mixString('xxxx', 'There') → xTxhxexre

function mixString(a, b) {
  let newStr = "";
  if (b > a) {
    for (let i = 0; i < b.length; i++) {
      if (i < a.length) newStr += a[i] + b[i];
      else newStr += b[i];
    }
  }
  if (a > b) {
    for (let i = 0; i < a.length; i++) {
      if (i < b.length) newStr += a[i] + b[i];
      else newStr += a[i];
    }
  }
  return newStr;
}
