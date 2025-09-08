// Array-2 --

// countEvens

// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// Examples

//     countEvens([2, 1, 2, 3, 4]) → 3
//     countEvens([2, 2, 0]) → 3
//     countEvens([1, 3, 5]) → 0

function countEvens(nums) {
  let evens = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) evens++;
  }
  return evens;
}
