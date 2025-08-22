// Array-1 --

// has23

// Given an int array length 2, return true if it contains a 2 or a 3.

// Examples

//     has23([2, 5]) → true
//     has23([4, 3]) → true
//     has23([4, 5]) → false

function has23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 || nums[i] == 3) return true;
  }
  return false;
}
