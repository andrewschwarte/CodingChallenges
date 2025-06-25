// String-3 --

// withoutString

// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

// Examples

//     withoutString('Hello there', 'llo') → He there
//     withoutString('Hello there', 'e') → Hllo thr
//     withoutString('Hello there', 'x') → Hello there

function withoutString(base, remove) {
  let result = "";
  let i = 0;
  let lowerBase = base.toLowerCase();
  let lowerRemove = remove.toLowerCase();

  while (i < base.length) {
    if (
      i + remove.length <= base.length &&
      lowerBase.substring(i, i + remove.length) == lowerRemove
    ) {
      i += remove.length; // skip this part
    } else {
      result += base[i];
      i++;
    }
  }

  return result;
}
