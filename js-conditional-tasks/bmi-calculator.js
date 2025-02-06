/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight= 60;
let height = 1.55;
let bmi = weight / (height*height);
let calculate = parseFloat(bmi.toFixed(2));
// console.log(calculate);
if (calculate < 18.5){
    console.log('You are underweight');
}
else if (calculate >= 18.5 && calculate <=24.9){
    console.log('You are normal');
}
else if (calculate >=25 && calculate <= 29.9){
    console.log('you are overweight');
}
else {
    console.log('You are obese');
}