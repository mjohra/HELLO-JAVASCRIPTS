const friends = ["Hamim", "Tusher", "Mouri", "Tush", "Tusher", "Mouri"];
const numbers = [1, 2, 3, 4, 5, 3, 4, 5, 6, 7];

function noDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(noDuplicate(friends));
console.log(noDuplicate(numbers));
