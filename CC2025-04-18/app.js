// Warmup-2 --

// last2

// Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

// Examples

//     last2('hixxhi') → 1
//     last2('xaxxaxaxx') → 1
//     last2('axxaaxx') → 1

function last2(str) {
  let count = 0;
  let withoutLast = str.slice(str[0], str.length - 1);
  let lastTwo = str.slice(str.length - 2, str.length);
  for (let i = 0; i < str.length; i++) {
    if (lastTwo === withoutLast[i] + withoutLast[i + 1]) count++;
  }
  return count;
}
