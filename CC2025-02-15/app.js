// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

/*
P: takes in a list of strings in an []
R: returns an array with the geese removed.. wtf are geese. nvm i got it these are the geese -> 
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
E: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] returns ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
P: create a function tha ttakes in a list of strings aka []. if array contains ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"] take them out. inclides() is gonna be it here
*/

function gooseFilter(birds){
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => !geese.includes(bird));
}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])