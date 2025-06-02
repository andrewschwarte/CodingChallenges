// Warmup-1 --

// startHi

// Given a string, return true if the string starts with 'hi'and false otherwise.

// Examples

//     startHi('hi there') → true
//     startHi('hi') → true
//     startHi('hello hi') → false

function startHi(str) {
  if (str[0] + str[1] === "hi") return true;
  else return false;
}
