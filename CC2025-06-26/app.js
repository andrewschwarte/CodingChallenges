// String-3 --

// equalIsNot

// Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

// Examples

//     equalIsNot('This is not') → false
//     equalIsNot('This is notnot') → true
//     equalIsNot('noisxxnotyynotxisi') → true

function equalIsNot(str) {
  let countIs = 0;
  let countNot = 0;

  for (let i = 0; i < str.length; i++) {
    if (i + 1 < str.length && str.substring(i, i + 2) == "is") {
      countIs++;
    }
    if (i + 2 < str.length && str.substring(i, i + 3) == "not") {
      countNot++;
    }
  }

  return countIs == countNot;
}
