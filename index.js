function scuberGreetingForFeet(feet) {
  if (feet >= 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  }
  if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }
  if (feet > 2500) {
    return "No can do."
  }
  else {
    return "This one is on me!"
  }

}

function ternaryCheckCity(city) {
  let truth = (city === "NYC");
  let mess = null;
  truth ? mess = "Ok, sounds good." : mess = "No go.";
  return mess;

}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }
}