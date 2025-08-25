// Array-1 --

// double23

// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

// Examples

//     double23([2, 2]) → true
//     double23([3, 3]) → true
//     double23([2, 3]) → false

function double23(nums) {
  let twoCount = 0;
  let threeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) twoCount++;
    else if (nums[i] == 3) threeCount++;
  }

  return twoCount == 2 || threeCount == 2;
}
