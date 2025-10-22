// Array-3 --

// maxMirror

// We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.

// Examples

//     maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
//     maxMirror([1, 2, 1, 4]) → 3
//     maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2

function maxMirror(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      let length = 0;
      while (
        i + length < nums.length &&
        j - length >= 0 &&
        nums[i + length] == nums[j - length]
      ) {
        length++;
      }
      if (length > max) {
        max = length;
      }
    }
  }

  return max;
}
