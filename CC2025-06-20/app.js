// String-2 --

// zipZap

// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

//     zipZap('zipXzap') → zpXzp
//     zipZap('zopzop') → zpzp
//     zipZap('zzzopzop') → zzzpzp

function zipZap(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i + 2 < str.length && str[i] == "z" && str[i + 2] == "p") {
      result += "z";
      result += "p";
      i += 2;
    } else {
      result += str[i];
    }
  }

  return result;
}
