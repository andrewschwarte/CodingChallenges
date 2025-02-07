// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//P: takes in 1 integer
//R: returns an array
//E: n=5 --> [5,4,3,2,1]
//P: create a function that takes in an int. create an array from 1 to n. for loop and push. then reverse

function reverseSeq(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.reverse()
}

console.log(reverseSeq(5))