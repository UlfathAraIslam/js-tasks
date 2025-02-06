/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 35;
let isStudent = false;

if(age < 10){
    console.log('free ticket');
}
else if (isStudent){
    console.log('50% discount');
}
else if (age >=60){
    console.log('gets a 15 % discunt');
}
else{
    console.log('regular ticket fare 800tk');
}