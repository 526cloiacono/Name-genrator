//Generate Title
function genTitle(firstName) {
  if (firstName.length > 5) {
    return 'The Legendary';
  } else {
    return 'Coach';
  }
}

//Generate Team Name
function genTeamName(firstName) {
  const firstLetter = firstName.charAt(0);
  if (firstLetter === 'a' || firstLetter === 'A') { 
    return 'Dodgers'; 
  } else if (firstLetter === 'b' || firstLetter === 'B') {
    return 'Mets';
  } else if (firstLetter === 'c' || firstLetter === 'C') {
    return 'Yankees';
  } else if (firstLetter === 'd' || firstLetter === 'D') {
    return 'Phillies';
  } else if (firstLetter === 'e' || firstLetter === 'E') {
    return 'Cubs';
  } else if (firstLetter === 'f' || firstLetter === 'F') {
    return 'Red Sox';
  } else if (firstLetter === 'g' || firstLetter === 'G') {
    return 'Giants';
  } else {
    return 'Braves'; // Default team if the first letter is not A-G
  }
}

//Generate Stadium Name
function genStadiumName(roadType, favoriteColor) {
  if (roadType === 'road' && favoriteColor === 'blue') {
    return 'Blueridge Stadium'; // For people with road type "road" AND color "blue"
  } else if (roadType === 'street' && favoriteColor === 'green') {
    return 'Greenson Park'; 
  } else if (roadType === 'avenue' && favoriteColor === 'red') {
    return 'Redstone Arena'; 
  } else {
    return `${capitalize(favoriteColor)}field`; // Default case
  }
}

//Generate Mascot
function genMascot(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1);
  if (lastLetter === 'a') {
    return 'Shadows';
  } else if (lastLetter === 'e') {
    return 'Storms';
  } else if (lastLetter === 'i') {
    return 'Blazes';
  } else if (lastLetter === 'o') {
    return 'Thorns';
  } else if (lastLetter === 'u') {
    return 'Frosts';
  } else {
    return 'Moons'; // Default mascot for letters not matched
  }
}

//Generate League
function genLeague(favoriteAnimal) {
  return `of the ${capitalize(favoriteAnimal)} League.`;
}

//Generate Rival Team
function genRivalTeam() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "Mets";
    case 2:
      return "Yankees";
    case 3:
      return "Twins";
    default:
      return "Phillies";
  }
}

//Master Baseball Identity Generator
function genBaseballIdentity() {
  //Get the user's inputs from HTML elements
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const roadType = document.getElementById('roadType').value;
  const favoriteColor = document.getElementById('favoriteColor').value.trim();
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

  //Run the generating functions and store results
  const title = genTitle(firstName);
  const teamName = genTeamName(firstName);
  const stadiumName = genStadiumName(roadType, favoriteColor);
  const mascot = genMascot(lastName);
  const league = genLeague(favoriteAnimal);

  //Capitalize variables when needed
  const capitalizedTitle = capitalize(title);
  const capitalizedTeamName = capitalize(teamName);
  const capitalizedStadiumName = capitalize(stadiumName);
  const capitalizedMascot = capitalize(mascot);

  //Combine variables into a single baseball identity
  const baseballIdentity = `${capitalizedTitle} ${capitalizedTeamName}, playing at ${capitalizedStadiumName}, with the mascot "${capitalizedMascot}" ${league} Rival team: ${genRivalTeam()}`;

  console.log(baseballIdentity);
  //Display the generated baseball identity
  document.getElementById('result').textContent = baseballIdentity;
}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
