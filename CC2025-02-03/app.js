// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //...
    let lowerCase = string.toLowerCase()
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    for(let letter of letters){
    if(!lowerCase.includes(letter))
        return false
    }
    return true
  }
  console.log(isPangram("hello"))
