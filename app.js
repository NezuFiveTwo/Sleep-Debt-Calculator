const getSleepHours = day => {
    if (day === 'monday') {
      return 7;
    }
    else if (day === 'tuesday') {
      return 10;
    }
    else if (day === 'wednesday') {
      return 6; 
    }
    else if (day === 'thursday') {
      return 9; 
    }
    else if (day === 'friday') {
      return 7;
    }
    else if (day === 'saturday') {
      return 5;
    }
  else if (day === 'sunday') {
    return 4; 
  }
  };
  
  const getActualSleepHours = () => { 
     return getSleepHours('monday') + 
     getSleepHours('tuesday') + 
     getSleepHours('wednesday') + 
     getSleepHours('thursday') + 
     getSleepHours('friday') + 
     getSleepHours('saturday') +
     getSleepHours('sunday');
  
  };
  
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }; 
  
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){ 
    console.log("You've gotten a good weeks rest!");
  } else if (actualSleepHours > idealSleepHours){
    console.log("You've gotten " + (idealSleepHours - actualSleepHours) +  "more sleep this week!");
  }else if (actualSleepHours < idealSleepHours){
    console.log("Get some rest! Go take a nap for "+ (idealSleepHours - actualSleepHours) + " Hours!");
  }
  };
  
  calculateSleepDebt();
  
