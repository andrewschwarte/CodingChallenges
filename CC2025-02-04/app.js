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


