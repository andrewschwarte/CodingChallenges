// AP-1 --

// wordsWithout

// Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.

// Examples

//     wordsWithout(['a', 'b', 'c', 'a'], 'a') → b,c
//     wordsWithout(['a', 'b', 'c', 'a'], 'b') → a,c,a
//     wordsWithout(['a', 'b', 'c', 'a'], 'c') → a,b,a

function wordsWithout(words, target) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] != target) count++;
  }

  let result = new Array(count);
  let index = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] != target) {
      result[index] = words[i];
      index++;
    }
  }

  return result;
}
