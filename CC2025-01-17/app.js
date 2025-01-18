// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//P: an array passed in at least 4 ints. 
//R: returns 1 int. the sum of the lowest two
//E: [1,2,3,4] returns 3
//P: create a function that takes in an array. create a variable for sum. sort the array numerically.

function sumTwoSmallestNumbers(numbers){
    numbers.sort(function(a,b){return a - b})
    sum = numbers[0] + numbers[1]
    return sum
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]), 7)

//tough one. I had to look up how to sort numerically becasue sort method sort() sorts alphabetically. so an array [19, 5, 42, 2, 77] would return [19,2,43,5,77]. get it?