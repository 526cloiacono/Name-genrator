// Generate Prefix
function genPrefix(firstName) {
  return firstName.length > 5 ? "The Great" : "Master";
}

// Generate First Name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") return "Dodgers";
  if (firstLetter === "b") return "Mets";
  if (firstLetter === "c") return "Yankees";
  if (firstLetter === "d") return "Phillies";
  if (firstLetter === "e") return "Cubs";
  if (firstLetter === "f") return "Red Sox";
  if (firstLetter === "g") return "Giants";
  return "Braves"; // Default team
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road" && favoriteColor === "blue") return "Blueridge";
  if (roadType === "street" && favoriteColor === "green") return "Greenson";
  if (roadType === "avenue" && favoriteColor === "red") return "Redstone";
  return `${favoriteColor}stone`; // Default
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") return "Shadow";
  if (lastLetter === "e") return "Storm";
  if (lastLetter === "i") return "Blaze";
  if (lastLetter === "o") return "Thorn";
  if (lastLetter === "u") return "Frost";
  return "Moon"; // Default
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal} clan.`;
}

// Capitalize Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

// Master Name Building Function
function genFullName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();
  const favoriteTeam = document.getElementById("favoriteTeam").value.trim(); // Fetch favorite team

  // Validate road type selection
  if (!roadType) {
    alert("Please select a valid road type.");
    return;
  }

  const prefix = capitalize(genPrefix(firstName));
  const newFirstName = capitalize(genFirstName(firstName));
  const middleName = capitalize(genMiddleName(roadType, favoriteColor));
  const newLastName = capitalize(genLastName(lastName));
  const suffix = genSuffix(favoriteAnimal);

  // Incorporate favorite team into the full name
  const fullName = `${prefix} of the ${newFirstName} ${middleName} ${newLastName}, rivals of the ${favoriteTeam}.`;

  document.getElementById("result").textContent = fullName;
}