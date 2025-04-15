// Warmup-2 --

// doubleX

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

//     doubleX('axxbb') → true
//     doubleX('axaxax') → false
//     doubleX('xxxxx') → true

function doubleX(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x")
      if (str[i + 1] === "x") return true;
      else return false;
  }
  return false;
}
