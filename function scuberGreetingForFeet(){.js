function scuberGreetingForFeet(){
  // Write your code here!
  if(feet<=400){
    return "This one is on me!";
  }else if(feet>2000 && feet <= 2500){
    return " I will gladly take your thirty bucks.";
  }else if (feet>2500){
    return "No can do.";
  }
}

function ternaryCheckCity(){
  // Write your code here!
  if (city==='NYC'){
    return "Ok,sounds good.";
  }else if(city !=='NYC' && city === 'Pittsburgh'){
    return "No go.";
  }else {
    return "Free Movement";
  }
}

function switchOnCharmFromTip(){
  // Write your code here!
  if(tip === 'generous'){
    return "Thank you so much.";
  }else if(tip === 'not as generous'){
    return "Thanks you."
  }else{
    return "Bye."
  }
}