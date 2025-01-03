//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//P: some value is param, but it cant be string
//R: returns the value *50 and +6
//E: 2 -> 106
//   4 -> 206
//P:  make a funciton that takes in a number. check for not a number and if true return "Error". multiply it by 50 and add 6 return it. 

function problem(x){
    if(typeof x != 'number')
        return "Error"
    else{
        return x*50 +6
    }
}

console.log(problem(2), 106)
console.log(problem(4), 206)