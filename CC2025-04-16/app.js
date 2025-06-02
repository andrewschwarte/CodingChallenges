// Warmup-2 --

// stringBits

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

//     stringBits('Hello') → Hlo
//     stringBits('Hi') → H
//     stringBits('Heeololeo') → Hello

function stringBits(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) newStr += str[i];

  return newStr;
}
