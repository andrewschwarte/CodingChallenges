// Array-2 --

// sum13

// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples

//     sum13([1, 2, 2, 1]) → 6
//     sum13([1, 1]) → 2
//     sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  let newArr = [];
  if (nums.length == 0) return 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != 13 && nums[i - 1] != 13) newArr.push(nums[i]);
  return newArr.reduce((a, b) => a + b, 0);
}
