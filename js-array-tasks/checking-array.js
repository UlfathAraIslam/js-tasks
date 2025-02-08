/*
. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

let number = 3;
let isConfident = true;
let dream ="web developer";
let goals =["developer","30000yen/month"];
console.log(
    'is number an array',Array.isArray(number),
    'is isConfident an array',Array.isArray(isConfident),
    'is dream an array', Array.isArray(dream),
    'is goals an array',Array.isArray(goals)
);