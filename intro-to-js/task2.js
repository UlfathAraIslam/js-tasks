/*Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04*/

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var averageMarks = (75.25 + 65 + 80 + 35.45 + 99.50)/5;
var roundedAverageMarks = averageMarks.toFixed(2); //for 2 decimal
var roundedAverageMarks = parseFloat(averageMarks.toFixed(2)); //for number
console.log(roundedAverageMarks);
