// Warmup-2 --

// stringSplosion

// Given a non-empty string like "Code" return a string like "CCoCodCode"

function stringSplosion(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) newStr.push(str.slice(0, i + 1));
  return newStr.join("");
}
