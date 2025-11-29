// Map-1 --

// mapAB3

// Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB3({'a': 'aaa', 'c': 'cake'}) → {'a': 'aaa', 'c': 'cake', 'b': 'aaa'}
//     mapAB3({'b': 'bbb', 'c': 'cake'}) → {'b': 'bbb', 'c': 'cake', 'a': 'bbb'}
//     mapAB3({'a': 'aaa', 'b': 'bbb', 'c': 'cake'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'cake'}

function mapAB3(someMap) {
  if (someMap.has("a") && someMap.has("b") == false) {
    someMap.set("b", someMap.get("a"));
  } else if (someMap.has("b") && someMap.has("a") == false) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}
