// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//P: expects a sting with a space separating two words
//R: returns a 2 worded string
//E: "andrew schwarte" -> "schwarte andrew"
//P: create a funciton that takes in a string. split the string using " " space delimiter, reverse it, and join it.

function nameShuffler(str){
    let reversed = str.split(" ").reverse().join(" ")
    return reversed
}

console.log(nameShuffler("andrew schwarte"), "schwarte andrew")