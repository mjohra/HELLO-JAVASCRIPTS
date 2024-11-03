/*

* function takes an array as parameter
* Returns the average of the odd numbers in the array

*/

function oddAverage(numbers) {
  let sum = 0;
  const odds = []; // odd is the arr that contains only odd number
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  for (const number of odds) {
    sum += number;
  }
  let average = sum / odds.length;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
const avg = oddAverage(numbers);
console.log("Average of odd number is " + avg);
