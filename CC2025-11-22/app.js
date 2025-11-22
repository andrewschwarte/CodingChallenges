// Map-1 --

// mapBully

// Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     mapBully({'a': 'candy', 'b': 'dirt'}) → {'a': '', 'b': 'candy'}
//     mapBully({'a': 'candy'}) → {'a': '', 'b': 'candy'}
//     mapBully({'a': 'candy', 'b': 'carrot', 'c': 'meh'}) → {'a': '', 'b': 'candy', 'c': 'meh'}

function mapBullyMap(map) {
  if (map.has("a")) {
    map.set("b", map.get("a"));
    map.set("a", "");
  }
  return map;
}
