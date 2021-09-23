// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Required array objects for password generation
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Confirmation variables
var numberConfirm;
var specialCharConfirm;
var upperCaseConfirm;
var lowerCaseConfirm;
var lengthConfirm = "";

// Start of the password generation function
function passGenerate() {
  lengthConfirm = prompt("Type down the desired length of your password. Between 8-128 characters.")

  if (!lengthConfirm) {
    alert("You must choose a password length to continue!")
    lengthConfirm = prompt("Try again, type down the desired length of your password. Between 8-128 characters.")

  }else if (lengthConfirm <= 7 || lengthConfirm >= 129) {
    alert("The password length must be at least 8 characters and no more than 128 characters.")
    lengthConfirm = prompt("Try again, type down the desired length of your password. Between 8-128 characters.")

  }else
  alert(`Your desired password will have ${lengthConfirm} characters.`)

  // Confirming with user other requirements of their password
  numberConfirm = confirm("Click OK if you would like your password to have numbers.")
  specialCharConfirm = confirm("Click OK if you would like your password to have special characters.")
  upperCaseConfirm = confirm("Click OK if you would like your password to have uppercase characters.")
  lowerCaseConfirm = confirm("Click OK if you would like your password to have lowercase letters.")

  if (!numberConfirm && !specialCharConfirm && !upperCaseConfirm && !lowerCaseConfirm) {
    alert("You must confirm at least one of the options.")
    numberConfirm = confirm("Click OK if you would like your password to have numbers.")
    specialCharConfirm = confirm("Click OK if you would like your password to have speacial characters.")
    upperCaseConfirm = confirm("Click OK if you would like your password to have uppercase characters.")
    lowerCaseConfirm = confirm("Click OK if you would like your password to have lowercase letters.")
  }

  // Password creation process
  var userPasswordChar = []
  var passwordRand = ""

  // The foor loop to generate password amongst the options that will be chosen
  for (var i = 0; i < lengthConfirm; i++) {
    passwordRand = passwordRand + userPasswordChar[Math.floor(Math.random() * userPasswordChar.length)];
    // userPasswordChar = passwordRand;
}

  if (numberConfirm) {
    userPasswordChar = userPasswordChar.concat(number)
  }
  
  if (specialCharConfirm) {
    userPasswordChar = userPasswordChar.concat(specialChar)
  }

  if (upperCaseConfirm) {
    userPasswordChar = userPasswordChar.concat(upperCaseChar)
  }

  if (lowerCaseConfirm) {
    userPasswordChar = userPasswordChar.concat(lowerCaseChar)
  }
  return passwordRand;
  
}

// Write password to the #password input
function writePassword() {
  var password = passGenerate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
