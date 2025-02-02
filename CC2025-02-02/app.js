// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 -> 8^1 + 9^2 -> 8 +81 -> 89

// The next number in having this property is 135

// See this property again: 135
// Task

// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!
/*

P: hmm. we are taking in a range of digits. Something like 1 to 100. We need to output all the numbers that satisfy the condition. 
R: Returns an array of all numbers in the range that satisfy the condition.
E: Input: 1,10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9] all one digit numbers are included.
   Input: 50,100 -> [89]
   input: 20-200 -> [89,135]
P: create a function that takes in two integers as a range. create a list from the entire range
*/

function sumDigPow(a, b){
    let arr = []
    let result = []
    let digit = []
    let final = []
    let powered
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    for(let j = 0; j < arr.length; j++){
        digit = arr[j].toString().split('').map(Number)
        for(let k = 0; k < digit.length; k++){
            powered = Math.pow(digit[k], k+1)
            result.push(powered)
        }
        sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        if(sum === arr[j])
            final.push(arr[j])
        result.length = 0
    }
    return final
}
console.log(sumDigPow(89,100))

//doozy