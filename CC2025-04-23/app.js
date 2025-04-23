// Warmup-2 --

// stringX

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

//     stringX('xxHxix') → xHix
//     stringX('abxxxcd') → abcd
//     stringX('xabxxxcdx') → xabcdx

function stringX(str) {
  let newStr = "";
  if (str.length == 0) return "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] != "x") newStr = newStr + str[i];
  }
  return str[0] + newStr + str[str.length - 1];
}
