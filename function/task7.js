/*
রাফি, বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার প্রস্তুতি নিচ্ছে। 🎓📖 সে বিভিন্ন মডেল টেস্ট দিয়েছে এবং প্রতিবার ভিন্ন ভিন্ন নম্বর পেয়েছে। কিন্তু সে দুশ্চিন্তায় আছে— সে কি চূড়ান্ত পরীক্ষায় সফল হতে পারবে?  রাফির জন্য তুমি willSuccess() নামে একটা ফাংশন লিখে দাও ,  যেটা একটা Number এর Array ইনপুট নেবে এবং রাফির রেজাল্ট এনালাইসিস করে রাফি কে guideline দিবে। 
মডেল টেস্টে 50 বা তার বেশী মার্ক মানে হলো Pass। আর 50 এর নিচে পাওয়া মানে হলো Fail. 
যদি Pass করা পরীক্ষার সংখ্যা  Fail করা পরীক্ষার সংখ্যা থেকে বেশি হয়, তাহলে সে মনে করবে যে সে প্রস্তুত এবং ফাংশন true রিটার্ন করবে 
অন্যথায়, সে মনে করবে এখনো প্রস্তুতি যথেষ্ট নয় এবং ফাংশন false রিটার্ন করবে 
*/

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passCount = 0;
  let failCount = 0;

  for (const mark of marks) {
    if (typeof mark !== "number"){
        return "Invalid"
    } 
    mark >= 50 ? passCount++ : failCount++;
  }
  return passCount > failCount;
}


const marks = 90;

const result = willSuccess(marks);
console.log(result);
