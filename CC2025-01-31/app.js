function grow(x){
    let result = 1
    result = x.reduce((accumulator, currentValue) => accumulator * currentValue)
    return result
}

console.log(grow([5,5,5]))