/*
* simple logic: A year is leap year if the year is divisible by 4
*correct logic: 
1. It is evenly divisible by 4 and not divisible by 100
2. If it is also evenly divisible by 100, it must also be evenly divisible by 400
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const year = isLeapYear(2024);
const year1 = isLeapYear(2400);
const year2 = isLeapYear(1900);

console.log(year);
console.log(year1);
console.log(year2);

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false
