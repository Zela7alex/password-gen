// Assignment Code
var generateBtn = document.querySelector("#generate");
 



function generatePassword() {

var passLength;

// PROMPTING THE USER HOW MANY CHARACTERS THEY WANT IN PASSWORD
passLength = window.prompt("How long would you like your password to be? Choose a number between 1 & 128");

//-----makes sure the user inputs a number
passLength = parseInt(passLength);

//-----if the users input is not equal to passLength tell them ERROR
if (passLength != passLength) {
  return "Error, NaN";
}

if ((passLength < 8) || (passLength > 128))
  return "Must choose a valid number";




























   
 }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
