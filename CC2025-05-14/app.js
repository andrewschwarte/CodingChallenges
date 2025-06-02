// String-1 --

// endsLy

// Given a string, return true if it ends in "ly".

// Examples

//     endsLy('oddly') → true
//     endsLy('y') → false
//     endsLy('oddl') → false

function endsLy(str) {
  if (str[str.length - 2] === "l" && str[str.length - 1] === "y") return true;
  else return false;
}
