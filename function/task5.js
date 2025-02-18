/*
জাবেদ একজন সচেতন ব্যবসায়ী। প্রতিদিন তার দোকানে প্রচুর পণ্য বিক্রি হয়, এবং প্রতিটি পণ্যের ওপর নির্দিষ্ট পরিমাণ VAT যোগ হয়। জাবেদ সব পণ্যের VAT একসাথে হিসেব না করে প্রতিটি পণ্যের VAT আলাদা করে রাখতে চায়, যেন পরবর্তী সময়ে হিসেব করতে সুবিধা হয়।
তুমি যেহেতু একজন দক্ষ প্রোগ্রামার, তোমার কাজ হলো calculateVAT() নামে একটি ফাংশন তৈরি করা, যা কোনো পণ্যের মূল্য ইনপুট নিলে স্বয়ংক্রিয়ভাবে তার VAT হিসেব করে দিবে। 
 VAT Rate:  7.5%
*/

function calculateVAT(price) {
  if (typeof price !== 'number' || price <=0) {
    return "Invalid";
  }
    return (price * 7.5) / 100;
}
console.log(calculateVAT(1500));
console.log(calculateVAT(-500));
console.log(calculateVAT('500'));
console.log(calculateVAT('foo'));