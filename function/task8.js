/*
একটি matrimony website এর জন্য তোমাকে একটা ফাংশন লিখে দিতে হবে। যাতে তারা খুব সহজেই দুইজন মানুষের বায়োডাটা এনালাইসিস করে বুঝতে পারে  যে তাদের মধ্যে বিবাহ সম্ভব কি সম্ভব না।  2 জন মানুষের ভেতর বিবাহ সম্ভব কিনা তা কিছু শর্তের ভিত্তিতে নির্ধারন করতে হবে। 
২ জন কে ভিন্ন জেন্ডারের হতে হবে। 
২ জনের Age difference 7 বছরের বেশী হওয়া যাবেনা।   ( 💡explore  Math.abs()  ) 
এই শর্ত গুলো পুরন হলে ই তোমার ফাংশন true return করবে।  

*/
function  validProposal( person1 , person2 ) {
    if(typeof person1 !== 'object' || typeof person2 !== 'object' || person1 === null || person2 === null){
        return 'Invalid'
    }
    if (
        typeof person1.name ==='string' && 
        typeof person2.name ==='string' && 
        typeof person1.gender === 'string' && 
        typeof person2.gender === 'string' &&
        (person1.gender === 'male' || person1.gender === 'female') &&
        (person2.gender === 'male' || person2.gender ==='female') &&
        person1.gender !== person2.gender &&
        typeof person1.age === 'number' &&
        typeof person2.age === 'number' &&
        Math.abs(person1.age - person2.age) <= 7)
    {
        return true;
    }
    else{
        return false;
    }
}


 
 const result1 = validProposal({ name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
    )
    const result2 = validProposal({ name: "joy", gender: "male", age: 25 } )
    const result3 = validProposal("Mizan", { name: "mitu", gender: "male", age: 32 })
 console.log('result1:',result1, 'result2:',result2,'result3:',result3);