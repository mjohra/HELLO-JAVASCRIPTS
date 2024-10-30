/*

Count how many times a string has the letter a

*/

let str = "I am so depressed now and I do not know what to do. I Just want to vanish from everything and everyone";
let counter=0;

for ( const letter of str){
    if (letter.includes('a')){
        counter++
    }
}
console.log(counter);