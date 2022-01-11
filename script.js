// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '_'];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];




function generatePassword() {

  var passLength;

  // PROMPTING THE USER HOW MANY CHARACTERS THEY WANT IN PASSWORD
  passLength = window.prompt("How long would you like your password to be? Choose a number between 8 & 128");

  //-----makes sure the user inputs a number
  passLength = parseInt(passLength);

  //-----if the users input is not equal to passLength tell them ERROR
  if (passLength != passLength) {
    return "Error, NaN";
  }

  if ((passLength < 8) || (passLength > 128)) {
    return "Must choose a valid number";
  }

  // USER MUST CONFRIM IF THEY WANT CAPS, LOWERCASE, NUMBERS OR SPECIAL CHARACTERS
  var charChosen = [];
  if (window.confirm("Do you want to include special characters?")) {
    charChosen = charChosen.concat(specialChar);
  }
  if (window.confirm("Do you want to include lowercase letters?")) {
    charChosen = charChosen.concat(lowerCaseChar);
  }
  if (window.confirm("Do you want to include uppercase letters?")) {
    charChosen = charChosen.concat(upperCaseChar);
  }
  if (window.confirm("Do you want to include numbers?")) {
    charChosen = charChosen.concat(numChar)
  }

  // PASSWORD MUST NOW BE ABLE TO PICK RANDOM CHARACTERS FROM ARRAY 

  var password = "";

  //--- for loop that will circle around the characters based off the passLength

  for (i = 0; i < passLength; i++) {
    randomIndex = Math.floor(Math.random() * charChosen.length);

    password += charChosen[randomIndex];
  }
  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
