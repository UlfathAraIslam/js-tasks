/*
হিরো  ভাই  এখন  সব গুলা  H  দিয়ে  মেয়ের  নাম   পেয়ে  গেছে  প্রত্যেকটা  এক  একটা  অবজেক্ট  এখন  আবার  হিরো  ভাই  বলতেছে   শুধু  যাদের হোমেডিস্ট্রিক  ঢাকা সেই  মেয়েদের বাসায়   প্রপোজাল  পাঠাবে 
এখন তোমাকে এমন একটা ফাংশন লিখতে হবে যেই ফাংশন ইনপুট হিসেবে দুইটা অবজেক্ট নেয় এবং সেই অবজেক্টের ভেতরে যদি হোম ডিস্ট্রিক্ট একজনের সাথে আরেকজনেরটা ম্যাচ করে তাহলে তোমাকে পজিটিভ একটা স্প্রিং রিটার্ন করতে হবে যে “proposal done”
যদি তোমার ইনপুট এর ভেতরে অবজেক্ট ছাড়া অন্য কিছু আসে তাহলে তোমাকে একটা ইরোর দিতে হবে যে ইনভ্যালিড input
*/

function sendProposal(heroBio,girlBio){
    if(typeof heroBio !== 'object' || typeof girlBio !=='object' || Array.isArray(heroBio) || Array.isArray(girlBio)){
        return('invalid input'); 

    }
    if(heroBio.district===girlBio.district){
        return('proposal done');
    }

    return('proposal cancel');
}

const heroBio = {
    fullName: 'hero',
    district:'dhaka'
}
const girlBio = {
    fullName:'henna',
    district:'dhaka'
}

const statusOfProposal = sendProposal(heroBio,girlBio);
console.log(statusOfProposal);