// Array-2 --

// more14

// Given an array of ints, return true if the number of 1's is greater than the number of 4's

// Examples

//     more14([1, 4, 1]) → true
//     more14([1, 4, 1, 4]) → false
//     more14([1, 1]) → true

function more14(nums) {
  let oneCount = 0;
  let fourCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) oneCount++;
    else if (nums[i] == 4) fourCount++;
  }

  if (oneCount > fourCount) return true;
  else return false;
}
