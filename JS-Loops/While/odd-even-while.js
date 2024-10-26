/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

console.log("Odd");
let i = 61;
while (i <= 100) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i++;
}

console.log("Even");
let j = 78;
while (j <= 98) {
  if (j % 2 == 0) {
    console.log(j);
  }
  j++;
}
