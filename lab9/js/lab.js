//Title: Lab 9 working with the dom
//Author: Brandon Vindel <bvindelf@ucsc.edu>
//Date: May 10, 2023

// Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);
   
// Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new
new1El.innerHTML = "What is up professor";
new1El.id = "new-one";

// Create a new element with document.createElement("p") and assign it to a variable new2El
var new2El = document.createElement("p");
new2El.id = "new-two";

// Change the html attribute of new1El to say something else.
new2El.innerHTML = "I am sorry, I meant to say How are you professor";

// Append both new elements one at a time using appendChild() (step 3)
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

outputEl.className = "changed";

// Change the css attributes of at least two elements of your page
new1El.style.color = "magenta";
outputEl.style.border = "dashed 1px red";
new2El.style.color = "green";