// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

//P: interger as an input, round to the next one
//R: returns an integer multiple of 5
//E: 5->5
//   6->10
//   99->100
//P: create a function that takes in an int. test to see if % 5 = 0, if true return it, if false do more logic. let me think... if 12%5 is 2

function roundToNext5(n){
    while(n%5!=0){
        n++
    }
    return n
}

console.log(roundToNext5(6),10)