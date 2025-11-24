// Map-1 --

// mapAB

// Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapAB({'a': 'Hi', 'b': 'There'}) → {'a': 'Hi', 'b': 'There', 'ab': 'HiThere'}
//     mapAB({'a': 'Hi'}) → {'a': 'Hi'}
//     mapAB({'b': 'There'}) → {'b': 'There'}

function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b"))
    someMap.set("ab", someMap.get("a") + someMap.get("b"));

  return someMap;
}
