// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// Examples ( Input --> Output )

// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

//P: integer n such that sqrt(n) is also an integer. Return -1 if not perfect square.
//R: return the next perfect square, the one that comes immeidtaley after, or return -1
//E: 25 -> 36
//   81 -> 100
//   20 -> -1
//P: create a function that takes in an integer. Check to see if the square root of the integer is chill. if not return -1. if it is chill, then 
 




function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let next =0 
    if(Math.sqrt(sq) < 0 || Math.sqrt(sq) % 1 != 0)
    return -1;
    else 
        next = (Math.sqrt(sq) + 1) 
        next = next * next
        return next
  }
  

  console.log(findNextSquare(25), 36)