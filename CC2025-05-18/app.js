// String-1 --

// hasBad

// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

//     hasBad('badxx') → true
//     hasBad('xbadxx') → true
//     hasBad('xxbadxx') → false

function hasBad(str) {
  for (let i = 0; i < 2; i++) {
    if (str[i] + str[i + 1] + str[i + 2] == "bad") return true;
  }
  return false;
}
