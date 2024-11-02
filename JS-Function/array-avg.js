/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(int_arr, size) {
  let sum = 0;
  for (let i = 0; i < int_arr.length; i++) {
    sum += int_arr[i];
  }
  let result = sum / size;
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let length = arr.length;
let average = make_avg(arr, length);
console.log(average);
