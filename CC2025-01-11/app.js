// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//P: two integers.
//R: returns a string of binary "010101"
//E: 1,1 1+1 = 2 so return "10"
//   5,9 5+9 = 14 so return "1110"
//P: create a function that takes in two numbers. declare variable sum, sum = a+b. then to string to get integer value in  base 2

function addBinary(a,b){
    let sum = a+b
    return sum.toString(2)
}

console.log(addBinary(5,9), "1110")
