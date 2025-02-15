/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

// subtask-1
let oddNum = 81;
let sumOfOddNumber = 0;
while(oddNum <=131){
    if(oddNum % 2 === 1){
        sumOfOddNumber += oddNum;
    }
    oddNum++;
}
console.log('sum of odd number:', sumOfOddNumber);

// subtask-2
let evenNum = 206;
let sumOfEvenNumber = 0;
while(evenNum<=311){
    sumOfEvenNumber+=evenNum;
    evenNum+=2;
}
console.log('sum of even number:',sumOfEvenNumber);