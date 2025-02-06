/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score = 87;
if (score>=90 && score>=100){
    console.log('A grade');
}
else if ( score>=80 && score<90){
console.log('B Grade');
}
else if (score>=70 && score<80){
    console.log('C Grade');
}
else if (score>=60 && score<70){
    console.log('D Grade');
}
else if (score>=0 && score<60){
    console.log('F Grade');
}
else{
    console.log('invalid score');
}