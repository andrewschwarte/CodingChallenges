// Array-2 --

// twoTwo

// Given an array of ints, return true if every 2 that appears in the array is next to another 2.

// Examples

//     twoTwo([4, 2, 2, 3]) → true
//     twoTwo([2, 2, 4]) → true
//     twoTwo([2, 2, 4, 2]) → false

function twoTwo(nums) {
  let foundPair = false;

  let twoCheck = nums.filter((e) => e == 2);
  if (twoCheck.length == 0) return true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2)
      if (nums[i + 1] == 2) foundPair = true;
      else if (nums[i - 1] != 2) foundPair = false;
  }

  return foundPair;
}
