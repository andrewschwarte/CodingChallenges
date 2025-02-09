//------------------------1.
function getVolume(radius){
    volume = 4/3 * Math.PI * Math.pow(radius, 3)
    return volume
}

console.log(getVolume(3))

//-----------------------3.
function pop(arr){
    arr.length = arr.length - 1
    return arr
}

console.log(pop([1,2,3,4,]))

//-----------------------4.

function numberOfZeroes(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0)
          count++
    }
    return count
}

console.log(numberOfZeroes([1,2,3,4,0,0,0,0,3,3,5,6,7]))

//----------------------6.

function reverse(lst){
    let reversed = lst.split('').reverse().join('')
    return reversed
}
console.log(reverse(['asd']))

//----------------------7.

function quadratic(a,b,c){

}
