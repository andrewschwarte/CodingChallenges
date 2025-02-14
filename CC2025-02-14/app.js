// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] 

// 'b***i***t***c***o***i***n'

function twoSort(s) {
    let sorted
    let first
    sorted = s.sort()
    first = s[0]
    return first.split('').join('***')
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] )