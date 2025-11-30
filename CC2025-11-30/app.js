// Map-1 --

// mapAB4

// Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the map.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB4({'a': 'aaa', 'b': 'bb', 'c': 'cake'}) → {'a': 'aaa', 'b': 'bb', 'c': 'aaa'}
//     mapAB4({'a': 'aa', 'b': 'bbb', 'c': 'cake'}) → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}
//     mapAB4({'a': 'aa', 'b': 'bbb'}) → {'a': 'aa', 'b': 'bbb', 'c': 'bbb'}

function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a").length > someMap.get("b").length)
      someMap.set("c", someMap.get("a"));
    else if (someMap.get("a").length < someMap.get("b").length)
      someMap.set("c", someMap.get("b"));
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }

  return someMap;
}
