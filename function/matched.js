const products = [
    {id:1, name: 'xiami phone', price: 1222},
    {id:2, name: 'iphone', price: 1222},
    {id:3, name: 'mac book air', price: 1222},
    {id:4, name: ' lenovo yoga laptop 2025', price: 1222},
    {id:5, name: ' laptop', price: 1222},
    {id:6, name: 'samsung phone note 7', price: 1222},
    {id:7, name: 'nokia old age phone gone', price: 1222},
    {id:8, name: 'Phone one', price: 1222},
]
function matchedProducts(products, search){
    for(const product of products){
        console.log(product);
    }
    return;
}
const result = matchedProducts(products,'phone');
console.log(result);