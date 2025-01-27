// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 
/*
P: how do i know what 3 numbers is a valid triangle? so if the two smaller numbers sumed is larger than the largest number, than it can be a triangle i see
R: returns true or false depending on if 3 params could make a triangle.
E: 
P: create a function that takes in 3 numbers: a,b,c. find the largest of the three. if A > b && A > c -> A = largest. sum the others and compare 
*/

function isTriangle(a,b,c){
    if(a <= 0 || b <= 0 || c<= 0)
        return false
    if((a >= b && a >= c) && (a < (b+c)))
        return true
    else if((b >= a && b >= c) && (b < (a+c)))
        return true
    else if((c >= a && c >= b) && (c < (a+b)))
        return true
    else
        return false
}

console.log(isTriangle(1,2,2))