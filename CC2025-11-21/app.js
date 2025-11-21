// String-3 --

// notReplace

// Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

// Examples

//     notReplace('is test') → is not test
//     notReplace('is-is') → is not-is not
//     notReplace('This is right') → This is not right

function notReplace(str) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    if (
      i + 1 < str.length &&
      str.substring(i, i + 2) == "is" &&
      (i == 0 || !isLetter(str[i - 1])) &&
      (i + 2 == str.length || !isLetter(str[i + 2]))
    ) {
      result += "is not";
      i += 2;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

// helper function like Character.isLetter
function isLetter(c) {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}
