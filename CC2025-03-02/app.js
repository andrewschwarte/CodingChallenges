// Issue

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Task

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// Example

// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

/*

P: we are given a list of numbers
R: returns  alist of numbers from numbers[0] to numbers[number.length-1]
E: 
P: create a function that takes in a list of numbers and returns a new list from min to max.

*/

function pipeFix(numbers){
  let min = numbers[0]
  let max = numbers[numbers.length-1]
  let result = []
  for(let i = min; i <=max;i++){
    result.push(i)
  }
  return result;
}