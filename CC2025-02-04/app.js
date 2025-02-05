function isSingleton(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === str[i+1])
            count++
    }
    if(count === str.length-1)
        return true
    else 
        return false
}

console.log(isSingleton('ssss'))

function isArithmetic(str){
    
}

function isPalindrome(str){
    let j = str.length - 1
    for(let i = 0; i < j / 2; i++){
        let x = str[i]
        let y = str[j - i]
        if(x != y)
            return false
    }   
    return true
}

console.log(isPalindrome('racecar'))
