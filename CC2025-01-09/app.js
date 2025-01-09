// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//P: takes in two integers
//R: returns an array of all the integers between the two inputed. Including the ones input
//E: 1,3 -> [,1,2,3]
//   6,12 -> [6,7,8,9,10,11,12]
//P: create a funciton that takes in 2 ingegers while int1 is > int2 map a new array with all those numbers inside it and such

function between(a, b){
    const arr = []
    while(a<=b){
        arr.push(a)
        a++
    }
    return arr
}

console.log(between(1,100))

