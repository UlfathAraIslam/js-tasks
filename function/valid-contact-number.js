/*
এবার তোমার কাজ হলো validContact() নামে একটা ফাংশন তৈরি করা, যা কিছু শর্তের ভিত্তিতে  যাচাই করবে একটা Contact number ভ্যালিড কিনা।  একটি Contact number ভ্যালিড হবার শর্ত হলো 
Contact Number টি অবশ্যই 11 digit এর হতে হবে। 
Contact Number টি  শুরু হবে  "01" দিয়ে 
Contact Number এ কোন স্পেস থাকা যাবে না।   

উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। 

*/
function  validContact( contact ) {
    if(typeof contact !== 'string'){
        return 'Invalid'
    }
    if(contact.length=== 11 && contact.startsWith('01') && contact.indexOf(' ') === -1){
        return true;
    }
    else{
        return false;
    }
}
// const result = validContact(true);
// const result = validContact(["01987654321"]);
// const result = validContact("0181923 4567");
const result = validContact("01345678900");
// const result = validContact("02145678900");

console.log(result);
