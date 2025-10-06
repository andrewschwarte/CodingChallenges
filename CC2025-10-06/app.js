// Array-2 --

// tripleUp

// Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

// Examples

//     tripleUp([1, 4, 5, 6, 2]) → true
//     tripleUp([1, 2, 3]) → true
//     tripleUp([1, 2, 4]) → false

function tripleUp(nums) {
  let check = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1] && nums[i + 1] + 1 == nums[i + 2])
      check = true;
  }
  return check;
}
