// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

/*
P: takes in an array of hunk junk but one "needle".
R: returns "found the needle at position {x}" whatever that may be.
E: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
P: create a function that takes in an array. indexOf?
*/

function findNeedle(haystack){
    let n = (haystack.indexOf("needle"))
    return `found the needle at position ${n}`
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])