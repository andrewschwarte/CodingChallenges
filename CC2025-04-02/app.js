// Warmup-1 --

// mixStart

// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

// Examples

//     mixStart('mix snacks') → true
//     mixStart('pix snacks') → true
//     mixStart('piz snacks') → false

function mixStart(str) {
  if (str.slice(1, 3) == "ix") return true;
  else return false;
}
