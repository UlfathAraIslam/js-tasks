let subject = 'chemistry';
let book = 'Chemistry';
//to compare string , it's recommended to use toLowerCase

if(subject.toLowerCase === book.toLowerCase){
    console.log(`Reading ${book}`);
}
else{
    console.log(`Can't read  ${book}`);
}