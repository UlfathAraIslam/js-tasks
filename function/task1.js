/*
ধরো একটা  লোক  ৫০০ টাকা  নিয়ে  বাজার এ  গেলো   সে  ১০০ টাকার  মরিচ  কিনলো  এরপর  সে ২০০ টাকার  মাছ  কিনলো  এরপর  সবজি  কিনলো ৫০ টাকার 
 এখন  বলো  তো  লোকটির  কাছে  আর  কত  টাকা  আছে 

*/
function bazarCost (totalBudget,chili,fish,veg){
    const cost = chili+fish+veg;
    const sum = totalBudget - cost;
    return sum;
}
const totalBudget = 500;
const chili = 100;
const fish = 200;
const veg = 50;
const restMoney = bazarCost(totalBudget,chili, fish,veg);
console.log(restMoney);