/*
Checking Array Membership with ‘includes’
Instructions:
-------------
--Create an array of books containing different book.
--Use the includes method to check if the array contains a javascript book.
--Print a message to the console indicating whether the element is present in the array or not.

*/

let books = ["Ikigai", "Paradoxical Sajid", "The Fountainhead"];
console.log(books);
console.log(books.includes("Javascript book"));
console.log("The book is present in index no " + books.indexOf("The Fountainhead"));
