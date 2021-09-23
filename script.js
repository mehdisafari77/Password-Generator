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

// Required array objects for password generation
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Confirmation variables
var numberConfirm
var speacialCharConfirm
var upperCaseConfirm
var lowerCaseConfirm
var lengthConfirm

function passGenerate() {
  lengthConfirm = prompt("Type down the desired length of your password. Between 8-128 characters.")

  if (lengthConfirm >= 7 || lengthConfirm >= 129) {
    alert("The password length must be at least 8 characters and no more than 128")
    lengthConfirm = prompt("Try again, type down the desired length of your password. Between 8-128 characters.")
  }
}