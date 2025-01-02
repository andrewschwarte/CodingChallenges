// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2 = 9(1+4+4 = 9)

//P: only ints? 
//R: Returns a number that takes all arr elements, squares them and adds them
//E: [1,2,2] -> 9
//   [2,4,4] -> 4+16+16 = 36
//   [0,5,5] -> 0+25+25 = 50
//P: make a funciton that takes in an array. Loop through the array and square each element then add them all up.

function completeSquare(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + Math.pow(arr[i], 2)
    }
    return sum
}

console.log(completeSquare([1,2,2]), [9])