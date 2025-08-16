// Array-1 --

// rotateLeft3

// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// Examples

//     rotateLeft3([1, 2, 3]) → 2,3,1
//     rotateLeft3([5, 11, 9]) → 11,9,5
//     rotateLeft3([7, 0, 0]) → 0,0,7

function rotateLeft3(nums) {
  nums.push(nums[0]);
  nums.splice(0, 1);
  return nums;
}
