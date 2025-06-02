// Warmup-1 --

// frontBack

// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

//     frontBack('code') → eodc
//     frontBack('a') → a
//     frontBack('ab') → ba

function frontBack(str) {
  if (str.length < 2) return str;
  let middle = str.slice(1, str.length - 1);
  return str[str.length - 1] + middle + str[0];
}
