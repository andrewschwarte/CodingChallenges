// Array-2 --

// no14

// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

//     no14([1, 2, 3]) → true
//     no14([1, 2, 3, 4]) → false
//     no14([2, 3, 4]) → true

function no14(nums) {
  let countFour = 0;
  let countOne = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 4) countFour++;
    else if (nums[i] == 1) countOne++;
  }

  if (countOne > 0 && countFour > 0) return false;
  else return true;
}
