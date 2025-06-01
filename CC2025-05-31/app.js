// String-1 --

// withoutX2

// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// Examples

//     withoutX2('xHi') → Hi
//     withoutX2('Hxi') → Hi
//     withoutX2('Hi') → Hi

function withoutX2(str) {
  if (str.startsWith("x") && str[1] != "x") return str.substring(1, str.length);
  else if (str[0] != "x" && str[1] == "x")
    return str[0] + str.substring(2, str.length);
  else if (str[0] == "x" && str[1] == "x") return str.substring(2, str.length);
  else return str;
}
