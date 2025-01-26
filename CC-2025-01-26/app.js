// Some numbers have funny properties. For example:

//     89 --> 8¹ + 9² = 89 * 1
//     695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//     46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
// (ap+bp+1+cp+2+dp+3+...)=n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) = n * k(ap+bp+1+cp+2+dp+3+...)=n∗k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
/*
P: takes in two ints n: the number that is split and summed and p the starting point of the powers.
R: returns k, what is multiplied by n to satify the formula
E:
P: create a funciton that takes in two ints n and p. We need to split the number into a array, i think at least. then we need to do some math.pow stuff at each index using p to start at. sum all that then divide it by n to get k, dont forget about -1 if sum mod n != 0
*/

function digPow(n, p){
    let powArr = []
    let sum = 0
    nArr = n.toString().split('').map(Number)
    for(let i = 0; i < nArr.length; i++){
        powArr.push(Math.pow(nArr[i], p))
        p++
    }
    sum = powArr.reduce((acc, cv) => acc + cv)
    if(sum % n === 0)
        return sum/n
    else
        return -1
}
console.log(digPow(46288, 3))

//fun one!