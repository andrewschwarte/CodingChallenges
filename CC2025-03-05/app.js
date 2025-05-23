// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number){
    number = Math.abs(number)
    let strArr = String([number]).split('')
    let numArr = []
    for(let i = 0; i < strArr.length;i++){
     numArr.push(Number(strArr[i]))
    }
    return numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

}

sumDigits(10)