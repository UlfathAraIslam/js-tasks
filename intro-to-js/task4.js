/*Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.

*/
var a = isNaN('11')
var a = isNaN(2-10)
console.log(a);

/*
Explanation: isNaN()checks if a value is Not a Number (NaN)
'11' (inside quotes) is a string. But Javascript tries to convert it into a number.
'11' is a valid numeric string, so JavaScriipt converts it to 11, which is number.
Since 11 is a number, isNaN(11) returns false.


* The expression (2-10) evaluates to -8, which is a valid number. Since -8 is a number, isNaN(-8) returns false.
*/