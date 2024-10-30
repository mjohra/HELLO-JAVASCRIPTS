const numbers = [1, 2, 3, 4, 5];

//reverse method use
console.log(numbers.reverse());

// for of loop
const number2 = [1, 2, 3, 4, 5];
let reversed = [];
for (const num of number2) {
  reversed.unshift(num);
}
console.log(reversed);

//for loop

const number3 = [1, 2, 3, 4, 5];
let rev_num = [];
for (i = number3.length - 1; i >= 0; i--) {
  const num = number3[i];
  rev_num.push(num);
}
console.log(rev_num);
