var generateBtn = document.querySelector("#generate");

function writePassword() {

    var pwLength = window.prompt("Choose your password length (must be between 8 and 128 characters)");
    var addSpecials = ["!","#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","=",">","<","?","@","\\","]","[","^","_","`","|","}","{","~"];
    var addCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var addLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var addNumbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charSelection = [];

    if (pwLength < 8 || pwLength > 128) {

        window.alert("Please try again and enter a number between 8 and 128");
      } 
    else if (pwLength >= 8 && pwLength <= 128) {
      console.log("Selected password length is " + pwLength + " characters.")
    }      
    else {
        window.alert("Please try again with a *number* between 8 and 128");
      }
    

    addSpecials = window.prompt("Include special characters/symbols? (y/n)");
        
      if (addSpecials === "y","Y") {
        addSpecials.concat[charSelection];
        console.log(charSelection.length);
                
      }

      else if (addSpecials === "n","N") {       
      }

   

     console.log("End of run.")

    return writePassword;
    
    }














    generateBtn.addEventListener("click", writePassword);












    // generateBtn.addEventListener("click", writePassword);

    
// //      User clicks GENERATE PASSWORD button, a prompt asking for character length comes up:
// console.log("red button is clicked...");
//  "onclick---->("How Long Should the New Password Be? (must be >= 8 and <= 128) :") "
// if (pwLength >=8 && pwLength <=128) {
//     console.log("Acceptable number")
// }

// else (pwLength <8 || pwLength >128) {
//     console.log("Unacceptable number")
// }

// //      if and else if statements can reject incorrect answers (non-numerical or less than 8 or more than 128):
// // if (chosenLength is !NOT in the array (8,9,10,11,12,13,14,15,16,17,18...) ---> Try again please, script restarts [how is this done?])
// // if (chosenLength number selected is one of the acceptable answers found in the array, capture that number as variable: chosenLength)

// //      Window alert asks if they'd like to use special characters
// //      Yes and No boxes - no "submit" box needed
// // if (button-click=yes){store variable as addSpecials}
// // 

// //      Window alert asks if they'd like to include uppercase characters
// //      Yes and No boxes - no "submit" box needed
// // if (button-click=yes){store variable as addCaps}
// //

// //      Window alert asks if they'd like to use numerical characters
// //      Yes and No boxes - no "submit" box needed
// // if (button-click=yes){store variable as addNums}
// // 

// //      Merge arrays (addSpecials, addCaps, addNums) to expand number of possible options into a new array, then run Math.random component combined with the new array
// //      to produce password using the selections provided.

// //      Password will default to lowercase only if no options are chosen.



//     window.prompt("Oops, that isn't a number between 8 and 128","Try again")
//     // //      User picks a number between 8 and 128, hits "OK"/"Next" button
    
//     // // //      Write the password that is produced to the page
//     return password;
// // }


// // go to page that presents a box with form
// // DONE

// // Assignment Code and global variables:
// // 

// var addSpecials = ["!","#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","=",">","<","?","@","\\","]","[","^","_","`","|","}","{","~"];
// var addCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var addLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var addNumbers = ["0","1","2","3","4","5","6","7","8","9"];

// // var charSelection = "";

// function makeID(length) {
    
//     // var addSpecials = ["!","#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","=",">","<","?","@","\\","]","[","^","_","`","|","}","{","~"];
    
//     // var addLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     // var addNumbers = ["0","1","2","3","4","5","6","7","8","9"];
//     // charSelection = (addLowercase.concat(addCaps))
//     // var charactersLength = charSelection.length;
//     var result = ("");
//     var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     var charactersLength = characters.length;

//     for ( var i = 0; i < length; i++ ) {

//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));

//    }
//    return result;
// }
// console.log(makeID(15));



// function writePassword(length) {
//     var pwLength = "45";
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// console.log(writePassword);






