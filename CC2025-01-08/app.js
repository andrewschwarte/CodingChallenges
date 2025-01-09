// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes

//     The number can be negative already, in which case no change is required.
//     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P: number can already be negative? but we are looking for positives to make negative.
//R: return a negative number. if 0 return 0 if already negative do nothing
//E: 1 -> -1
//   2 -> -2
//   -1 -> -2
//   0 -> 0
//P: create a function that takes in an int. if > 0 multiply by -1 to make negative.

function makeNegative(num){
    if(num > 0)
        num = num * -1

    return num
}

console.log(makeNegative(1))