// String-3 --

// countTriple

// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

// Examples

//     countTriple('abcXXXabc') → 1
//     countTriple('xxxabyyyycd') → 3
//     countTriple('a') → 0

function countTriple(str) {
  let count = 0;

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
      count++;
    }
  }

  return count;
}
