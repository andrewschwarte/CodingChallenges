// String-2 --

// oneTwo

// Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

// Examples

//     oneTwo('abc') → bca
//     oneTwo('tca') → cat
//     oneTwo('tcagdo') → catdog

function oneTwo(str) {
  let result = "";

  for (let i = 0; i + 2 < str.length; i += 3) {
    result += str.substring(i + 1, i + 3);
    result += str[i];
  }

  return result;
}
