function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return 'This one is on me!';
  }
  if(distance > 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  if( distance > 2500){
    return 'No can do.';
  }
}

scuberGreetingForFeet(distance);

function ternaryCheckCity(city){
  return ternaryCheckCity = city === 'NYC'? 'Ok, sounds good.' : "No go.";
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default: "thanks for everything"
      return 'Bye.'
      break;
  }

}
