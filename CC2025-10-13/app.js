// Array-2 --

// zeroFront

// Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

// Examples

//     zeroFront([1, 0, 0, 1]) → 0,0,1,1
//     zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
//     zeroFront([1, 0]) → 0,1

function zeroFront(nums) {
  let result = [];
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      result[index] = 0;
      index++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      result[index] = nums[i];
      index++;
    }
  }

  return result;
}
