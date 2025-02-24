// Given an array of product names, remove duplicates while preserving the original order. Use a loop to achive this without defining a function.
// Example Input
// ["Laptop","Phone","Laptop","Tablet","Phone"];
// Example output:
// ["Laptop","Phone","Tablet"];
const products =["Laptop","Phone","Laptop","Tablet","Phone"];
let uniqueProducts = [];
for(let i = 0; i < products.length; i++){
    const element = products[i];
    // console.log(element);
    if(!uniqueProducts.includes(element)){
        uniqueProducts.push(element)
    }
}
console.log(uniqueProducts);