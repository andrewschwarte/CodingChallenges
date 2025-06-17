// String-2 --

// getSandwich

// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

// Examples

//     getSandwich('breadjambread') → jam
//     getSandwich('xxbreadjambreadyy') → jam
//     getSandwich('xxbreadyy') →

function getSandwich(str) {
  let first = str.indexOf("bread");
  let last = str.lastIndexOf("bread");

  if (first == -1 || first == last) return "";

  return str.substring(first + 5, last);
}
