/*

Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result.

*/

function oddEvenDivide(input) {
  if (input % 2 === 1) {
    let oddResult = input * 2;
    return oddResult;
  } else {
    let evenResult = input / 2;
    return evenResult;
  }
}

let output = oddEvenDivide(5);
console.log(output);
