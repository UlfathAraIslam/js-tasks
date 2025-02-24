// Given an array of products, each with a category, separate them into two arrays: one for electronics and one for clothing. Store the result in an object.
// Input: 
// const products = [
//     {name: "Laptop", category:"Electronics"},
//     {name: "T-Shirt", category:"Clothing"},
//     {name: "Headphones", category:"Electronics"},
//     {name: "Jeans", category:"Clothing"},
// ]
// Output:
// {
//     electronics: ["Laptop","Headphones"],
//     clothing: ["T-Shirt","Jeans"]
// }

const products = [
        {name: "Laptop", category:"Electronics"},
        {name: "T-Shirt", category:"Clothing"},
        {name: "Headphones", category:"Electronics"},
        {name: "Jeans", category:"Clothing"},
    ]
    let categorizedProducts = {
        electronics: [],
        clothing: [],
    }

    for(let i = 0; i < products.length; i++){
        const singleProduct = products[i];
        // console.log(singleProduct);
        if(singleProduct.category === "Electronics"){
            categorizedProducts.electronics.push(singleProduct.name)
        }
        else if (singleProduct.category === "Clothing"){
            categorizedProducts.clothing.push(singleProduct.name)
        }
    }
    console.log(categorizedProducts);