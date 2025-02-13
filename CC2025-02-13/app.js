// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

/*
P: we get a string of characters
R: returns a string that contains chars from a and b. Only 1 from each tho! and the longest possible. And in order!
E: a = "aaabbbcccddd" -> "abcd"
P: create a function that takes in 1 or 2 strings. find a way to combine cancate both strings. I have an idea. then loop sort the string in alphabetical order. Then find duplicates.
*/

function longest(a, b){
    let c = ""
    let sorted
    let result = []
    if(b != null)
        c = a+b
    else c = a
    sorted = c.split('').sort()
    
    for(let i = 0; i < sorted.length; i ++){
        if(sorted[i] != sorted[i+1])
            result.push(sorted[i])
    }
    return result.join('')
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")