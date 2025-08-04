// Logic-2 --

// luckySum

// Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

// Examples

//     luckySum(1, 2, 3) → 6
//     luckySum(1, 2, 13) → 3
//     luckySum(1, 13, 3) → 1

function luckySum(a, b, c) {
  let arr = [a, b, c];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 13) break;
    else newArr.push(arr[i]);
  }
  return newArr.length > 1
    ? newArr.reduce((a, b) => a + b, 0)
    : Number(newArr.join(""));
}
