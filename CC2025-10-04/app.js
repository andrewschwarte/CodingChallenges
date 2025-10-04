// String-3 --

// sumNumbers

// Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. A number is a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)

// Examples

//     sumNumbers('abc123xyz') → 123
//     sumNumbers('aa11b33') → 44
//     sumNumbers('7 11') → 18

function sumNumbers(str) {
  let sum = 0;
  let num = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      num += str[i]; // build the current number
    } else {
      if (num != "") {
        sum += parseInt(num);
        num = "";
      }
    }
  }

  // add the last number if the string ends with digits
  if (num != "") {
    sum += parseInt(num);
  }

  return sum;
}
