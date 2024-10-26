/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let oddSum = 0;
for (let i = 91; i = 129; i++) {
  if (i % 2 == 1) {
    oddSum += i;
  }
}
console.log("Sum of odd number is ", oddSum);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let evenSum = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 == 1) {
    evenSum += i;
  }
}
console.log("Sum of even number is ", evenSum);
