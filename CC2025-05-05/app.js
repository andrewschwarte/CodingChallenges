// String-1 --

// firstHalf

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

//     firstHalf('WooHoo') → WooHoo
//     firstHalf('HelloThere') → HelloThere
//     firstHalf('abcdefg') → abcdefg

function firstHalf(str) {
  return str.substring(0, str.length / 2);
}
