// Array-1 --

// no23

// Given an int array length 2, return true if it does not contain a 2 or 3.

// Examples

//     no23([4, 5]) → true
//     no23([4, 2]) → false
//     no23([3, 5]) → false

function no23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 || nums[i] == 3) return false;
  }
  return true;
}
