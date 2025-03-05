// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/* 
P: were given a string of words
R: returns the length of the shortest word
E: bitcoin take over the world maybe who knows perhaps -> 3 
P: 

*/

function findShort(s){
    let minLength = Infinity
    let split = s.split(' ')
    for(let i = 0; i < split.length;i++){
        if(split[i].length < minLength)
            minLength = split[i].length
    }
    return minLength
}

findShort('bitcoin take over the world maybe who knows perhaps')