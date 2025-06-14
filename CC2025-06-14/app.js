// String-2 --

// repeatSeparator

// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, separated by the separator string.

// Examples

//     repeatSeparator('Word', 'X', 3) → WordXWordXWord
//     repeatSeparator('This', 'And', 2) → ThisAndThis
//     repeatSeparator('This', 'And', 1) → This

function repeatSeparator(word, sep, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += word + sep;
  }
  return result.substring(0, result.length - sep.length);
}
