// String-2 --

// xyzThere

// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

//     xyzThere('abcxyz') → true
//     xyzThere('abc.xyz') → false
//     xyzThere('xyz.abc') → true

function xyzThere(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + 3) == "xyz" && str[i - 1] != ".") return true;
  }
  return false;
}
