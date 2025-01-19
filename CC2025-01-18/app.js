// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//P: takes in a list of strings in this format ['a', 'b', 'c']
//R: returns an array with with format n: string per element.
//E: ["pizza", "chocolate", "burger"] -> ["1: pizza", "2: chocolate", "3: burger"]
//P: create a function that takes in an array. Probably need to do some map business and use like n + 1 as delimiter or so but idrk...


function number(array){
    let prepended = []
    for(let i = 0; i < array.length; i++){
        prepended.push(`${i + 1}: ${array[i]}`)
    }
    return prepended
}

console.log(number(["a", "b", "c"]))

//couldve used map but decided to go with for loop and push. need more practice with map the syntax isnt clicking for me yet.