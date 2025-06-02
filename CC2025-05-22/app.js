// String-1 --

// lastTwo

// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

//     lastTwo('coding') → codign
//     lastTwo('cat') → cta
//     lastTwo('ab') → ba

function lastTwo(str) {
  if (str.length <= 1) return str;
  let temp = str[str.length - 1];

  return str.substring(0, str.length - 2) + temp + str[str.length - 2];
}
