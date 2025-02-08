/*
Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
let books =["html","javascript","css"];
let findJs=books.includes("javascript");
console.log(findJs);
if(findJs){
    console.log("js is present");
}
else{
    console.log("there's no js books");
}