// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//P: Expects an array of ints with all the ints except for 1 guy. always odd is strange
//R: returns the number thats different
//E: [3,4,3,3,3] returns 4
//   [1,1,1,1,1,1,10] returns 10
//P: create a function that takes in an array. loop through it and create if statements to check if [i] is the same as [i+1]


function stray(numbers) {
    let sorted = numbers.sort()
        if(sorted[0]!= sorted[1])
            return sorted[0]
        else
            return sorted[sorted.length-1]

}

console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3)