// Warmup-1 --

// front22

// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

// Examples

//     front22('kitten') → kikittenki
//     front22('Ha') → HaHaHa
//     front22('abc') → ababcab

function front22(str) {
  if (str.length < 2) return str + str + str;
  let first2 = str[0] + str[1];
  return first2 + str + first2;
}
