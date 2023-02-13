// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables for characters
function generatePassword() {
var possibleChar = [];
var specialChar = ["! @ # $ % ^ & * ( ) / * - + < > ? ? : ; { } [ ] _ \ | ="];
var num = ["0 1 2 3 4 5 6 7 8 9"];
var lowerCase = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
var upperCase = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
};

//prompt user to chose number of characters

numOfChar = prompt("Please choose the number of characters that you would like to use in your password.  Make sure the number is between 8 and 128 characters!")
 
if (numOfChar < 8 || numOfChar > 128){
  alert ("Please choose the correct number of characters!");
}
else{
  alert ("Your password will be " + numOfChar + " characters long!");
}

//user input for  special characters

passwordSpecialChar= confirm ("Please choose any special characters that you will want in your password");
if (passwordSpecialChar) {
  alert ("Your password will have special characters in it!");
}
else {
  alert ("You have not chosen any special characters to have in your password");
}

//user input for number characters

passwordNum= confirm ("Please choose any numbers that you will want in your password");
if (passwordNum) {
  alert ("Your password will have numbers in it!");
}
else {
  alert ("You have not chosen any numbers to have in your password");
}

//user input for lower case letters

passwordLowerCase= confirm ("Please choose any lower case letters that you will want in your password")
if (passwordLowerCase) {
  alert ("Your password will have lower case letters in it!");
}
else {
  alert ("You have not chosen any lower case letters to have in your password");
}

//user input for upper case letters

passwordUpperCase= confirm ("Please choose any numbers that you will want in your password");
if (passwordUpperCase) {
  alert ("Your password will have upper case letter in it!");
}
else {
  alert ("You have not chosen any upper case letters to have in your password");
}

