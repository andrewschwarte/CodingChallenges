// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P: given a non-empty array of integers
//R: return an integer of all the elements multipled
//E: [1,2] = 1 * 2 = 2
//   [5,5,5] = 5 * 5 * 5 = 125
//P: create a function called grow that takes in an array x. reduce x but instead of adding, multiply.

function grow(x){
    let result = 1
    result = x.reduce((accumulator, currentValue) => accumulator * currentValue)
    return result
}

console.log(grow([5,5,5]))
