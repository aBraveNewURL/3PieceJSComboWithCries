// go to page that presents a box with form
// DONE

//      User clicks GENERATE PASSWORD button, a prompt asking for character length comes up:
// "onclick---->window.alert ("How Long Should the New Password Be? (must be >= 8 and <= 128) :") "
//      User picks a number between 8 and 128, hits "OK"/"Next" button
//      if and else if statements can reject incorrect answers (non-numerical or less than 8 or more than 128):
// if (chosenLength is !NOT in the array (8,9,10,11,12,13,14,15,16,17,18...) ---> Try again please, script restarts ["return" statement?])
// if (chosenLength number selected is one of the acceptable answers found in the array, capture that number as variable: chosenLength)

//      Window alert asks if they'd like to use special characters
//      Yes and No boxes - no "submit" box needed
// if (button-click=yes){store variable as addSpecials}
// 

//      Window alert asks if they'd like to include uppercase characters
//      Yes and No boxes - no "submit" box needed
// if (button-click=yes){store variable as addCaps}
//

//      Window alert asks if they'd like to use numerical characters
//      Yes and No boxes - no "submit" box needed
// if (button-click=yes){store variable as addNums}
// 

//      Merge arrays (addSpecials, addCaps, addNums) to expand number of possible options into a new array, then run Math.random component combined with the new array
//      to produce password using the selections provided.

//      Password will default to lowercase only if no options are chosen

//      Write the password that is produced to the page
// document.appendchild.x.y.z(#password on HTML) 











// Assignment Code and global variables:
var generateBtn = document.querySelector("#generate");
// figure out how to add DOUBLE QUOTES to list of possible characters and increase possibleChars string length by 1  !#$%&')(*+,-./:;=><?@\][^_`|}{~



// Write password to the #password input
function writePassword() {

  var possibleChars = "!#$%&')(*+,-./:;=><?@\][^_`|}{~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  for (var i = 0; i < 5; i++)
  password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
  console.log(password);
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









