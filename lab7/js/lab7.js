// index.js - Learning how to use Functions
// Author: Brandon Vindel (bvindelf@ucsc.edu)
// Date: 05/02/2023

//create a function
function sortYourname() {
    var username = window.prompt("Hi, please tell me your name so I can try and fix it.");
    console.log("username =",username)
    //make the string into an array
    var usernameArray = username.split('');
    console.log("usernameArray =", usernameArray)
    //sort the array
    var usernameArraysort = usernameArray.sort();
    console.log("usernameArraysort =",usernameArray)
    //combine array and string
    var usernameSorted = usernameArraysort.join('');
    console.log('usernameSorted =',usernameSorted);
    return usernameSorted
}

// output
document.writeln("Here is your sorted name: ", sortYourname(), "</br>")
document.writeln("You're welcome by the way for the new name.")