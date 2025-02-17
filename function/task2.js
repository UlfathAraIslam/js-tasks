/*
হিরো ভাই   ভালোবাসা  দিবসে   সে  সিদ্ধান্ত  নিলো  বিয়ে  করবে  কিন্তু  হিরো ভাই  হেনা  নাম  ছাড়া  কোনো  মেয়ে কেই বিয়ে  করবে ঘটক  চাচা কে  বললো  এমন  মেয়ে   খুঁজে  পাওয়া  কঠিন  তাই হিরো  ভাই  বললো  ঠিক  আছে  সমস্যা  নাই  কন্ডিশন   সহজ  করলাম  যে  মেয়ের  নামের   মধ্যে  আমার  হেনার  H  থাকবে  আমি  তাকেই  বিয়ে  করবো 
এখন  তোমার  কাজ  হলো   অনেকগুলা  নামের  মধ্যে  থেকে  যে  নামের  মধ্যে  H  আছে  সেইগুলা  আলাদা  করে  হিরো   ভাই  কে  দেওয়া 

*/
function findHName (girlList){
    let hGirlName = [];

    for(let i=0; i<girlList.length; i++){
        const girlName = girlList[i]
        if(girlName.includes('h')){
            hGirlName.push(girlName)
        }
    }
    return hGirlName;
}
const girlList = ['henna','kana','mina','tina','hna'];
const newGirlList = findHName(girlList);
console.log(newGirlList);