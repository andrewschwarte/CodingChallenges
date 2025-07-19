// Logic-1 --

// fizzString

// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

// Examples

//     fizzString('fig') → Fizz
//     fizzString('dib') → Buzz
//     fizzString('fib') → FizzBuzz

function fizzString(str) {
  if (str[str.length - 1] == "b" && str[0] == "f") return "FizzBuzz";
  else if (str[0] == "f") return "Fizz";
  else if (str[str.length - 1] == "b") return "Buzz";
  else return str;
}
