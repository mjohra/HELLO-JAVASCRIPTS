//Check whether a string contains all the vowels a, e, i, o, u

function containsAllVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();  // Convert to lowercase to handle both cases

    for (let vowel of vowels) {
        if (!str.includes(vowel)) {
            return false;  // If any vowel is missing, return false
        }
    }
    return true;  // All vowels are present
}

// Test the function
console.log(containsAllVowels("education"));  // true
console.log(containsAllVowels("hello world"));  // false


