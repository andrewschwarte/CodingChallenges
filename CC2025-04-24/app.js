// Warmup-2 --

// altPairs

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// Examples

//     altPairs('kitten') → kien
//     altPairs('Chocolate') → Chole
//     altPairs('CodingHorror') → Congrr

function altPairs(str) {
  str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i += 4) {
    newArr.push(str[i]);
    newArr.push(str[i + 1]);
  }
  return newArr.join("");
}
