// Map-1 --

// mapAB2

// Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB2({'a': 'aaa', 'b': 'aaa', 'c': 'cake'}) → {'c': 'cake'}
//     mapAB2({'a': 'aaa', 'b': 'bbb'}) → {'a': 'aaa', 'b': 'bbb'}
//     mapAB2({'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}

function mapAB2(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") == someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}
