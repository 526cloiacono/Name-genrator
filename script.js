// Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return 'The Great';
  } else {
    return 'Master';
  }
}

// Generate First Name (Team Name)
function genFirstName(firstName) {
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
    return 'Braves'; // Default if the letter is not a-g
  }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === 'road' && favoriteColor === 'blue') {
    return 'Blueridge';
  } else if (roadType === 'street' && favoriteColor === 'green') {
    return 'Greenson';
  } else if (roadType === 'avenue' && favoriteColor === 'red') {
    return 'Redstone';
  } else {
    return `${favoriteColor}stone`; // Default case
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1);
  if (lastLetter === 'a') {
    return 'Shadow';
  } else if (lastLetter === 'e') {
    return 'Storm';
  } else if (lastLetter === 'i') {
    return 'Blaze';
  } else if (lastLetter === 'o') {
    return 'Thorn';
  } else if (lastLetter === 'u') {
    return 'Frost';
  } else {
    return 'Moon'; // Default if the letter is not matched
  }
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
  return `of ${favoriteAnimal} clan.`;
}

// Switch Case for Favorite Player
function genFavoritePlayer() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'Mets';
    case 2:
      return 'Yankees';
    case 3:
      return 'Twins';
    default:
      return 'Phillies'; // defult 
  }
}

// Full Name Generator
function genFullName() {
  // Get the User Inputs from HTML Elements
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const roadType = document.getElementById('roadType').value;
  const favoriteColor = document.getElementById('favoriteColor').value.trim();
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

  // Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  // Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix);
  const capitalizedFirstName = capitalize(newFirstName);
  const capitalizedMiddleName = capitalize(middleName);
  const capitalizedLastName = capitalize(newLastName);

  // Combine all of the Name variables in a new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} of the ${genFavoritePlayer()} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

  console.log(fullName);
  // Display the new name
  document.getElementById('result').textContent = fullName;
}

// Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
