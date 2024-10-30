const persons = ["Tusher", "Mehjabin", "Hamim", "Tauhid"];

const sorted_person = persons.sort();
console.log(sorted_person);

const numbers = [33, 45, 66, 1, 3, 4, 43, 12];
//Aacending order
const numbers_asc = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers_asc);
//Descending order
const numbers_desc = numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers_desc);

