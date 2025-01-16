
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//too easy for prep but well do it anyway
//P: takes in an age between 0 and 21 or more
//R: return a string of drink + something
//E: 
//P: create a function that takes in an age. do a bunch of if statments

function peopleWithAgeDrink(old) {
    if(old < 14)
        return "drink toddy"
    else if(old < 18)
        return "drink coke"
    else if(old < 21)
            return "drink beer"
    else
        return "drink whisky"
}

console.log(peopleWithAgeDrink(21))