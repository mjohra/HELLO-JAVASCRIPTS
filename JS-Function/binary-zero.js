/*

Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/

function count_zero(binary_num) {
  let count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    if (binary_num[i].includes("0")) {
      count++;
    }
  }

  return count;
}

console.log(count_zero("101010")); // Output: 3
console.log(count_zero("1111")); // Output: 0
console.log(count_zero("00000")); // Output: 5
