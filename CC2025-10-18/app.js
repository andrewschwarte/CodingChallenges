// Array-3 --

// canBalance

// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// Examples

//     canBalance([1, 1, 1, 2, 1]) → true
//     canBalance([2, 1, 1, 2, 1]) → false
//     canBalance([10, 10]) → true

function canBalance(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    if (leftSum * 2 == total) {
      return true;
    }
  }

  return false;
}
