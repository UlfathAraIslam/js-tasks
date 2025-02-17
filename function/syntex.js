function addNumbers (num1,num2){
    // console.log('arguments',arguments); // to know the arguments
    const result = num1 + num2
    // console.log(result);
    return result;

    // console.log(hhkkkk); //nothing will work after return.
}
// function theke kono kisu nie aste chaile seta function er bahire rakhte hbe, ekta variable e rakhte hbe to use later.

const output = addNumbers(10,20)
console.log(output);
// console.log(addNumbers.length); //to know the number of parameters.


// to reuse the function return the function
const num1 =2;
const num2 = 4;
const result = addNumbers(num1,num2);
// console.log('result',result/2);