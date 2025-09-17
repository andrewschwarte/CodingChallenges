// Array-2 --

// prependSum

// Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array.

// Examples

//     prependSum([1, 2, 4, 4]) → 3,4,4
//     prependSum([3, 3, 0]) → 6,0
//     prependSum([1, 1, 1, 1, 1]) → 2,1,1,1

function prependSum(nums) {
  let first = nums[0];
  let second = nums[1];

  let sum = first + second;

  let chopped = nums.slice(2, nums.length);

  chopped.unshift(sum);

  return chopped;
}
