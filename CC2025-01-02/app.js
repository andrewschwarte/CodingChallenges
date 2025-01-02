// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

//P: takes in a string, always strings
//R: expects "name" + plays banjo or name + does not play banjo
//E: Robert plays banjo
//   Sergio does not play banjo
//P: create a function that takes in a str. Use and if statement to see if name starts with an R or r. i just realized i have to split and join.

function areYouPlayingBanjo(name){
    if(name[0] == 'r' || name[0] == 'R')
        return `${name} plays the banjo`
    else
        return `${name} does not play the banjo`
}

console.log(areYouPlayingBanjo('Andrew'), 'Andrew does not play the banjo')
console.log(areYouPlayingBanjo('Robert'), 'Robert plays the banjo')