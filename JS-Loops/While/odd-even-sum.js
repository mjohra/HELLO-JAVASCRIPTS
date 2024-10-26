/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let i = 81;
let oddSum = 0;
while (i <= 131) {
  if (i % 2 == 1) {
    oddSum += i;
  }
  i++;
}
console.log(oddSum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let j = 206;
let evenSum = 0;
while (j <= 311) {
  if (j % 2 == 0) {
    evenSum += j;
  }
  j++;
}
console.log(evenSum);
