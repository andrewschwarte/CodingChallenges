// String-2 --

// sameStarChar

// Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

// Examples

//     sameStarChar('xy*yzz') → true
//     sameStarChar('xy*zzz') → false
//     sameStarChar('*xa*az') → true

function sameStarChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "*") {
      if (i > 0 && i < str.length - 1) {
        if (str[i - 1] != str[i + 1]) {
          return false;
        }
      }
    }
  }
  return true;
}
