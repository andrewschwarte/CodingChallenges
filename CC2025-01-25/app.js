// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Example

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note

// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

/*looks fun lets give it a go

P: eyes : ; required
   nose - ~ optional
   mouth D ) required
   arr as an argument with ajacent characters that are smiley faces
R: returns a number. number of **valid** smiley faces in the array
E: [:)] should return 1
   [:),:-),:~D. ;D. :}, :D] should return 5
   [':)', ';(', ';}', ':-D'] shoudl return 2
P: alrrright here we go. create a function that takes in an array of strings > 1. i need a way to check the strings at each element in the array. something like if(the string at arr[i=0] starts with a : or ends with a ) or includes a ~ or something like that.
*/

function countSmileys(arr){
  
    let temp = []
    let count = 0
  
  for(let i = 0; i < arr.length;i++){
    
    temp.push(arr[i])
    temp = temp.toString()
    temp = temp.split('')
    if(temp.length < 3 && (temp[0] === ';' || temp[0] === ':') && (temp[1] === ')' || temp[1] === 'D')){
        count++
        temp.length = 0

    }else if(temp.length === 3 && (temp[0] === ';' || temp[0] === ':') && (temp[1] === '-' || temp[1] === '~') && (temp[2] === ')' || temp[2] === 'D')){
        count++
        temp.length = 0
    }else
        temp.length = 0
}
return count
}

console.log(countSmileys([';D', ':(', ':)', ';D']), 3)