/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
// subtask 1

let evenNum = 61;
while (evenNum<=100){
    if(evenNum%2===1){
        console.log('even number',evenNum);
    }
    evenNum++;
}
// subtask 2
let oddNum = 78;
while(oddNum<=98){
    if(oddNum%2 ===0){
        console.log('odd number',oddNum);
    }
    oddNum++
}
