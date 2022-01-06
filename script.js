// Assignment code here


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

const allowedDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const allowedUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const allowedLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const allowedSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];




function randomNum(highestPossible){
  let answer = (Math.floor(Math.random()*highestPossible))+1;
  return answer
}
function randomCat(highestPossible){
  let answer = (Math.floor(Math.random()*highestPossible));
  return answer
}



let categoryPool = [];
let categoryTemp = null;
let passLength = 0;
let randomPass = [];
let index = null;
let finalPass = '';

function generateCharacter(categoryNum){
  if(categoryNum === 1){
    index = randomNum(allowedDigits.length-1);
    randomPass.push(allowedDigits[index])
  }
  if(categoryNum === 2){
    index = randomNum(allowedUpperCase.length-1);
    randomPass.push(allowedUpperCase[index])
  }
  if(categoryNum === 3){
    index = randomNum(allowedLowerCase.length-1);
    randomPass.push(allowedLowerCase[index])
  }
  if(categoryNum === 4){
    index = randomNum(allowedSpecial.length-1);
    randomPass.push(allowedSpecial[index])
  }
}




function runAtStart(){

  const answer1 = window.prompt('Do You want to Include Numbers')
  if(answer1 === 'YES' || answer1 ===  'yes' ){
    categoryPool.push(1);

  } 
  const answer2 = window.prompt('Do You want to Include Uppercase letters')
  if(answer2 === 'YES' ||answer2 ===  'yes' ){
    categoryPool.push(2);
  } 
  const answer3 = window.prompt('Do You want to Include Special letters')
  if(answer3 ==='YES' || answer3 === 'yes' ){
    categoryPool.push(3);
  } 
  const answer4 = window.prompt('Do You want to Include Lowercase letters')
  if( answer4 ==='YES' || answer4 === 'yes' ){
    categoryPool.push(4);
  } 
  console.log(categoryPool);
  passLength = window.prompt('How Many Characters in Password?')
  if(passLength< 0){
    alert('Length is too short')
  } else if(passLength > 128){
    alert('Password Length is too long')
  }


  for(i=0; i < passLength; i++){
    categoryTemp = randomCat(categoryPool.length+1);
    console.log(categoryTemp);
    generateCharacter(categoryTemp);
  }


 console.log(randomPass); 


finalPass = randomPass.join('');


console.log(finalPass);

}

runAtStart();
/* 
function returnCategory(category){
  let category = Math.random()*4


} */


function generatePassword() {
  var password = '';
  

  if(1){
    return allowedDigits[randomNum(0,10)]
    
  } else if(2){
    return allowedUpperCase[randomNum(0,26)]

  }else if(3){
    return allowedLowerCase[randomNum(0,26)]

  }else if(4){
    return allowedSpecial[randomNum(0,9)]
  }


  return password
}

/* 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 */