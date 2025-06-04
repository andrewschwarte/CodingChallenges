// String-2 --

// catDog

// Return true if the string "cat" and "dog" appear the same number of times in the given string.

// Examples

//     catDog('catdog') → true
//     catDog('catcat') → false
//     catDog('1cat1cadodog') → true

function catDog(str) {
  let catCount = 0;
  let dogCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) == "cat") catCount++;

    if (str.substring(i, i + 3) == "dog") dogCount++;
  }
  return catCount == dogCount;
}
