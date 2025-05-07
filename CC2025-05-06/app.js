// String-1 --

// withoutEnd

// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

//     withoutEnd('Hello') → ell
//     withoutEnd('java') → av
//     withoutEnd('coding') → odin

function withoutEnd(str) {
  return str.substring(1, str.length - 1);
}
