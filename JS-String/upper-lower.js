// Count how many times a string has the letter a or A

let str = "I Am so depressed now and I do not know what to do. I Just want to vanish from everything and everyone";
let counter=0;

for ( const letter of str){
    if (letter.includes('a') || letter.includes('A')){
        counter++
    }
}
console.log(counter);