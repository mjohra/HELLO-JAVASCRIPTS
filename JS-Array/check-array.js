/**
 *** Checking if it's an Array

Instructions:
--Create different variables, each containing either an array or a non-array value.
--Now use isArray to check if each variable is an array.
--Print a message to the console indicating whether each variable is an array or not.

 */

let numbers=[11,22,33,44,55,66,77];
let age= 28;
let checkArray = Array.isArray(numbers);
let checkArray2 = Array.isArray(age);
if(checkArray){
    console.log('numbers variable is an array');
}
else{
    console.log('numbers variable is not an array'); 
}
if(checkArray2){
    console.log('age variable is an array');
}
else{
    console.log('age variable is not an array'); 
}