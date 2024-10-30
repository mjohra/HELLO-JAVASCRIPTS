//Capitalize Every first Letter of each word in a String

function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}

// Test the function
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));