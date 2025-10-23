// Array-3 --

// countClumps

// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.

// Examples

//     countClumps([1, 2, 2, 3, 4, 4]) → 2
//     countClumps([1, 1, 2, 1, 1]) → 2
//     countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(nums) {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    let val = nums[i];
    let length = 0;
    while (i < nums.length && nums[i] == val) {
      length++;
      i++;
    }
    if (length >= 2) {
      count++;
    }
  }

  return count;
}
