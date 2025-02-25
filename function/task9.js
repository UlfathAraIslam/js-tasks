/*
রাকিব অফিসে কাজ করতে করতে ঘুমিয়ে যায়।  যার কারনে সে সকল কাজ সঠিক সময় শেষ করতে পারেনা। তার এমন একটা ফাংশন দরকার যার মধ্যমে office  ঘুমানোর টোটাল সময় টা তিনি ক্যালকুলেট করে দেখতে চান এবং সেই সময় টুকু বাসায় এসে অফিসের কাজ করতে চান।  
তোমার কাজ হচ্ছে calculateSleepTime() নামে একটি ফাংশন তৈরি করা, যা একটি Array ইনপুট হিসেবে নেবে। Array তে রাকিবের ঘুমানোর সময় (seconds) গুলো সংখ্যা আকারে থাকবে। ফাংশনটি Array থেকে মোট সময় বের করে সেটিকে ঘণ্টা, মিনিট এবং সেকেন্ডে রূপান্তর করে একটি অবজেক্ট আকারে রিটার্ন করবে।
*/

function  calculateSleepTime( times ) {
    let totalSeconds = 0;
    if (Array.isArray(times)){
        for (let time of times){
            if (typeof time !== 'number'){
                return 'Invalid'
            }
            totalSeconds += time;
        }
    }
    let hour = Math.floor(totalSeconds/3600);
    let remainingSeconds = totalSeconds % 3600;
    let minute = Math.floor(remainingSeconds/60);
    let second = remainingSeconds % 60;
    return {hour,minute,second}
}

const result1 = calculateSleepTime([100, 3800])
console.log(result1);
