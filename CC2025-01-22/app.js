// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"


//P: see wikipedia... really!? Two arguments are strings, case insensitive so going to be using toLower.
//R: return true or false depending if it is an anagram (true) or not (false).
//E: (foefet, toffee), true
//   (Buckethead, DeathCubek) true
//   (andrew, luis) false
//P: create a function that takes in two strings. toLower the arguments. Check if they are of equal length. Anagram logic.


function isAnagram(test, original){
    let testLower = test.toLowerCase()
    let originalLower = original.toLowerCase()
    
    if(testLower.length != originalLower.length)
        return false
    let testLowerArr = testLower.split("")
    let originalLowerArr = originalLower.split("")
    testLowerArr.sort()
    originalLowerArr.sort()
    let sortedTest = testLowerArr.join("")
    let sortedOriginal = originalLowerArr.join("")

    if(sortedTest === sortedOriginal){
        return true
    }else
        return false

}

console.log(isAnagram("andrew", "werdna"))

//this could have been a lot better but i tried...