// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: sum of elements is even or odd. 
//R: return a string "odd" or "even"
//E: [1,2,3] sum is 6 so "even"
//   [1,2] sum is 3 so "odd"
//P: create a function that takes in an array. sum = 0if array is empty retun even becuase [0] is even. sum the array and then do some modulus logic stuff. return even or odd

function oddOrEven(array){
    let sum = 0
    for(let i = 0; i< array.length; i++){
        sum = sum + array[i]
    }
    if (sum % 2 == 0)
        return "even"
    else
        return "odd"
}

