// Warmup-1 --

// stringE

// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

//     stringE('Hello') → true
//     stringE('Heelle') → true
//     stringE('Heelele') → false

function stringE(str) {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) if (arr[i] === "e") count++;
  if (count >= 1 && count <= 3) return true;
  else return false;
}
