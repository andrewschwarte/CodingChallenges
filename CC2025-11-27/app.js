// Map-1 --

// topping3

// Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".

// Examples

//     Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.
//     topping3({'potato': 'ketchup'}) → {'potato': 'ketchup', 'fries': 'ketchup'}
//     topping3({'potato': 'butter'}) → {'potato': 'butter', 'fries': 'butter'}
//     topping3({'salad': 'oil', 'potato': 'ketchup'}) → {'salad': 'oil', 'potato': 'ketchup', 'fries': 'ketchup', 'spinach': 'oil'}

function topping3(someMap) {
  if (someMap.has("potato")) someMap.set("fries", someMap.get("potato"));
  if (someMap.has("salad")) someMap.set("spinach", someMap.get("salad"));
  return someMap;
}
