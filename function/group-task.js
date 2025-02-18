function calculateVAT(price) {
    if (typeof price !== 'number' || price <=0) {
      return "Invalid";
    }
      return (price * 7.5) / 100;
  }

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

function willSuccess(marks) {
    if (!Array.isArray(marks)) {
      return "Invalid";
    }
    let passCount = 0;
    let failCount = 0;
    for (const mark of marks) {
      if (typeof mark !== "number" || isNaN(mark)){
          return "Invalid"
      } 
      mark >= 50 ? passCount++ : failCount++;
    }
    if (passCount > failCount){
        return true;
    } else{
        return false;
    }
  }

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
    let hours = Math.floor(totalSeconds/3600);
    let remainingSeconds = totalSeconds % 3600;
    let minutes = Math.floor(remainingSeconds/60);
    let seconds = remainingSeconds % 60;
    return {hours,minutes,seconds}
}
