// প্রাকটিস চ্যালেঞ্জ-১
// প্রতিদিন তোমার কাজ কি? 

// ১) রাত ৮ টা বাজে মডিউল আনলক করো  

// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

// ৩) ভিডিও দেখতে দেখতে নোটস নাও 

// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

// এখন তোমার কাজ হচ্ছে একটা for লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

const tasks = [
'১) রাত ৮ টা বাজে মডিউল আনলক করো  ',

'২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো',

'৩) ভিডিও দেখতে দেখতে নোটস নাও ',

'৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো ',

]
let i = 0;
while(i <tasks.length){
    console.log(tasks[i]);
    i++
}
let canUnderstand = false;
if(!canUnderstand){
    console.log('৫)সাপোর্ট সেশনে জয়েন করো');
}