// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
/*
P: takes in 2 strings. str and end,
R: returns true or false
E: ('andrew', 'rew'), true
   ('matthew123', '123'), true
   ('1234', '5'), false
P: create a function that takes in a str and an ending. probably using char at and count how long strings are.
*/ 

function solution(str, ending){
    let strRev = str.split('').reverse()
    let endingRev = ending.split('').reverse()
    if (endingRev.length === 0)
        return true
    for(let i = 0; i < endingRev.length; i++){
        if(endingRev[i] != strRev[i])
            return false
        else if(i === endingRev.length -1 &&  endingRev[i] === strRev[i])
            return true
    }
}

console.log(solution("andrew", "mathrew"))

//wow look at this

function solutionEz(str, ending){
    return str.endsWith(ending);
  }