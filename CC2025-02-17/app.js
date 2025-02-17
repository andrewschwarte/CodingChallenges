// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

// Note: Zero should be left as it is.
// // 

/*
P: given a number
R: returns a number but without ending zeroes
E:  1450   -> 145
 960000 -> 96
 1050   -> 105
 -1050  -> -105
 0      -> 0   0s should be left at zero
P: create a function that takes in a number then pop some zeroes
*/

function noBoringZeros(n){
    let result
    if (n  === 0)
        return 0
    arr = n.toString().split('')
    while(arr[arr.length-1] === '0')
        arr.pop()
    return Number(arr.join(""))
}

noBoringZeros(1450)