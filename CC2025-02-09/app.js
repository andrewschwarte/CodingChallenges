// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let sArr = s.split('')
    let even
    let middle = sArr.length / 2
    middle = Math.floor(middle)
    if(sArr.length % 2 != 0)
      return sArr[middle]
    else 
      return `${sArr[middle-1]}${sArr[middle]}`
      
}

console.log(getMiddle(""))