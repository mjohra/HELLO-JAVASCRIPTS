//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

function replaceXWithY(str) {
    return str.replace(/x/g, 'y').replace(/X/g, 'Y');
}

// Test the function
console.log(replaceXWithY("x-ray")); 
console.log(replaceXWithY("eXample"));
console.log(replaceXWithY("TeXt"));