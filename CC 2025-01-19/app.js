// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: Always integers? Are we going to get other characters? Ever an empty arr?
//R: Return a new array with each value double
//E: if we are given [2,3,4] should return [4,6,8]
//   if we are given [4,5,6] should reutn [8,10,12]
//   if we are given [2,22] should return [4,44]
//P: make a function that takes in a array
//   map through the array and multiply each element by 2

function doubled(arr){
    return arr.map(e=>e*2)
}