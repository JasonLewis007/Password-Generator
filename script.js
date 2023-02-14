
// Assignment code here
function generatePassword() {
  var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChar = [];

  // get input from user 
  numberOfCharacters = prompt("Please choose how many characters that you want in your password. Choose between 8-128 characters");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters between 8-128 characters long.";
  } 
  else if (isNaN(numberOfCharacters)) {
    numberOfCharacters= prompt("Please enter a valid number of characters.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

  passwordHasLowercase = confirm("Do you want lowercase characters in your password?");
  if (passwordHasLowercase) {
     alert("There will be lowercase characters in your password.");
  }
  else {
    alert("There will not be any lowercase characters in your password.");
  }

  passwordHasUppercase = confirm("Do you want uppercase characters in your password?");
  if (passwordHasUppercase) {
    alert("There will be uppercase characters in your password.");
  }
  else {
    alert("There will not be uppercase letters in your password.");
  }

  passwordHasNumbers = confirm("Do you want to use numbers in your password?");
  if (passwordHasNumbers) {
    alert("There will be numbers in your password.");
  }
  else {
    alert("There will not be numbers in your password.");
  }

  passwordHasSpecial = confirm("Do you want special characters in your password?");
  if (passwordHasSpecial) {
    alert("There will be any special characters in your password.");
  }
  else {
    alert("There will not be any special characters in your password.");
  }

  if (passwordHasLowercase === false && passwordHasUppercase === false && passwordHasNumbers === false && passwordHasSpecial === false) {
    return ("Please select a character for your password.");
  };

  //if statements to group password characters and combine arrays
  if (passwordHasLowercase) {
    possibleChar = possibleChar.concat(lowerChar);
  }
  if (passwordHasUppercase) {
    possibleChar = possibleChar.concat(upperChar);
  }
  if (passwordHasNumbers) {
    possibleChar = possibleChar.concat(numChar);
  }
  if (passwordHasSpecial) {
    possibleChar = possibleChar.concat(specialChar);
  }

  // for loop to generate random characters for the password
  let printPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleChar.length)];
    printPassword = printPassword + possibleChar[rng];
  }

  //password output
  return printPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



