/*
বিয়ে-শাদী তো ঠিক হয়ে গেল হিরো ভাইয়ের বাবা পড়লো অনেক বিপদে বিশাল বড় অনুষ্ঠান করতে হবে এজন্য সে আসলে কতজন মানুষকে দাওয়াত দিবে এটা নিয়ে ভাবতেছে তো তার দাওয়াতের একটা লিঙ্ক লিস্ট তৈরি করা হইল  যে  টা  অনেক  গুলা  অবজেক্ট  এর ' একটা  আরে   এখন তোমার কাজ হবে এই দাওয়াতের লিস্টে থেকে টোটাল কতজন মানুষকে আসলে দাওয়াত দেওয়া হয়েছে সেটা বের করা
const relatives = [
   { name: "Alice", member: 1 },
   { name: "Bob", member: 2 },
   { name: "Charlie", member: 3 },
   { name: "Alice", member: 1 },
   { name: "David", member: 4 },
   { name: "Eve", member: 5 },
   { name: "Bob", member: 2 },
   { name: "Frank", member: 6 },
   { name: "Grace", member: 7 },
   { name: "Alice", member: 1 }
];



Challenge: আচ্ছা  তোমাকে  একটা  চ্যালেঞ্জ  দেয়  যদি  তোমাকে এ বলা  হতো  যে  এই  লিস্ট  থেকে  ডুপ্লিকেট  অর্থ্যাৎ  একই  পরিবার  যদি  দুইবার  থাকে  সেইটা  বাদ  দিয়ে  নতুন  একটা  লিস্ট  তৈরী  করো  তাহলে  কিভাবে  করতে ?

*/
function removeDuplicate(relatives){
    let inviteList = [];
    for (const relative of relatives){
        let isUnique = true;
        for (const newRelative of inviteList){
            if (relative.name ===newRelative.name && relative.member === newRelative.member){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            inviteList.push(relative)
        };

     }
     return inviteList;
}

const relatives = [
    { name: "Alice", member: 1 },
    { name: "Bob", member: 2 },
    { name: "Charlie", member: 3 },
    { name: "Alice", member: 1 },
    { name: "David", member: 4 },
    { name: "Eve", member: 5 },
    { name: "Bob", member: 2 },
    { name: "Frank", member: 6 },
    { name: "Grace", member: 7 },
    { name: "Alice", member: 1 }
 ];

 const finalInviteList = removeDuplicate(relatives);
 console.log(finalInviteList);